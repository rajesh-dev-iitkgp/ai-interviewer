import { useState } from "react"

const ResetPassword = () => {

   const [data,setData] = useState({
      password:"",
      confirmPassword:""
   })

   const onChangeHandler = (e) => {
      setData(prev => ({
         ...prev,
         [e.target.name]:e.target.value
      }))
   }

   const submitHandler = async () => {
      if(data.password !== data.confirmPassword) {
         alert("Password and Confirm Password should be same")
         return
      }

      try {
          console.log(data)
      }
      catch (error) {
         console.log(error)
      }
   }

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
         <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
            <h1 className="text-2xl font-semibold mb-2">
               Reset Password
            </h1>
            <p className="text-sm text-gray-500 mb-6">
               Enter your new password
            </p>
            <div className="space-y-4">
               <input
                  type="password"
                  name="password"
                  placeholder="New Password"
                  value={data.password}
                  onChange={onChangeHandler}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
               />
               <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={data.confirmPassword}
                  onChange={onChangeHandler}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
               />
               <button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
                  onClick = {submitHandler}
               >
                  Reset Password
               </button>
            </div>
         </div>
      </div>
   )
}

export default ResetPassword
