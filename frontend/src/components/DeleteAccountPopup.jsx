import { TriangleAlert } from "lucide-react"
import { deleteUser } from "../services/authService"
import { useNavigate } from "react-router-dom"
import {useContext} from "react"
import { UserContext } from "../context/userContext"

const DeleteAccountPopup = ({showDeletePopup,setShowDeletePopup}) => {

    const navigate = useNavigate()
    const {setUser} = useContext(UserContext)

    const handleDelete = async ()=>{
        try{
            const response = await deleteUser()
            if(response.status === 200){
                setShowDeletePopup(false)
            }
            setUser(null);
            navigate("/login",{replace:true})
        }
        catch(error){
            console.log(error)
            alert(error.response.data.message)
        }
    }

  return (
    showDeletePopup ? 
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
            {/* Warning Icon */}
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
                <TriangleAlert className="text-red-500 w-10 h-10" />
            </div>
            {/* Heading */}
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800">
                    Delete Account
                </h2>
                <p className="text-gray-500 mt-4 leading-7">
                    This action cannot be undone. All your interviews,
                    analytics, and profile information will be permanently deleted.
                </p>
            </div>
            {/* Buttons */}
            <div className="flex gap-4 mt-10">
                <button className="flex-1 border border-gray-300 rounded-2xl py-3 font-medium hover:bg-gray-100 transition"
                    onClick={() => setShowDeletePopup(false)}>
                    Cancel
                </button>
                <button className="flex-1 bg-red-500 text-white rounded-2xl py-3 font-medium hover:bg-red-600 transition"
                    onClick={handleDelete}>
                    Yes, Delete
                </button>
            </div>
        </div>
    </div> : null
  )
}

export default DeleteAccountPopup
