import { useContext } from "react"
import Sidebar from "./Sidebar"
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from "../context/userContext"


const ProtectedLayout = () => {

    const {user} = useContext(UserContext)

    if(!user) {
        return <Navigate to="/login" />
    }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default ProtectedLayout
