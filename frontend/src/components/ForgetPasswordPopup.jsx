import {useState} from 'react'
import { forgetPassword } from '../services/authService'

const ForgetPasswordPopup = ({showForgetPasswordPopup, setShowForgetPasswordPopup}) => {

    const [email, setEmail] = useState('')
    const onClickHandler = async () => {
        try{
            if(!email) {
                alert('Please enter email')
                return
            }
            const response = await forgetPassword({email})
            if(response.data.success) {
                setShowForgetPasswordPopup(false)
                console.log(response.data.resetUrl)
                
            }
        }
        catch(error){
            console.log(error)
            alert(error.response.data.message)
        }
    }

  return (
    showForgetPasswordPopup ?
    <div>
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-[90%] max-w-md rounded-xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-xl font-semibold">
                        Forgot Password
                    </h2>
                    <button 
                        className="text-white text-md p-2 bg-red-400 hover:bg-red-600 w-5 h-5 flex items-center justify-center rounded-full cursor-pointer"
                        onClick={() => setShowForgetPasswordPopup(false)}>
                        X
                    </button>
                </div>

                <p className="text-sm text-gray-500 mb-4">
                Enter your registered email address.
                </p>
                <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg mt-5"
                    onClick={onClickHandler}>
                Send Reset Link
                </button>
            </div>
        </div>
    </div> : null
  )
}

export default ForgetPasswordPopup
