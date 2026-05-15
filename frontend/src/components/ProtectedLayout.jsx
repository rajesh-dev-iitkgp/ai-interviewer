import { useContext } from "react"
import Sidebar from "./Sidebar"
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from "../context/userContext"
import Loader from "./Common/Loader"


const ProtectedLayout = () => {

    const {user,loading} = useContext(UserContext)

    if(loading) {
        return <Loader />
    }

    if(!user) {
        return <Navigate to="/login" />
    }

  return (
    <div className="flex min-h-screen">
      <Sidebar className="w-20%"/>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default ProtectedLayout
