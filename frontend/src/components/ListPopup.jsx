import { useNavigate } from "react-router-dom"
import { logoutUser } from "../services/authService"
import { useContext } from "react"
import { UserContext } from "../context/userContext"

const ListPopup = ({showListPopup}) => {
    const navigate=useNavigate()
    const {setUser}=useContext(UserContext)

    const logoutHandler = async () => {
        await logoutUser()
        setUser(null)
        navigate("/login",{replace:true})
    }

  return (
    showListPopup ? 
    <div className="absolute right-0 text-black top-6 w-44 bg-white rounded-xl shadow-lg border border-gray-400  py-2 z-50">

        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
            onClick={() => navigate("/interview")}>
            Take Interview
        </button>

        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
            onClick={() => navigate("/my-interviews")}>
            My Interviews
        </button>

        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
            onClick={() => navigate("/analytics")}>
            Analytics
        </button>

        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
            onClick={() => navigate("/profile")}>
            Profile
        </button>

        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
            onClick={() => navigate("/settings")}>
            Settings
        </button>

        <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 transition"
            onClick={logoutHandler}>
            Logout
        </button>

    </div> : null
  )
}

export default ListPopup
