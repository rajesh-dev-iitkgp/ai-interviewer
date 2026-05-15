import logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import {  House,History,FileText,ChartColumn,User,Settings,LogOut } from 'lucide-react'
import { logoutUser } from '../services/authService'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'

const Sidebar = () => {

  const {setUser} = useContext(UserContext)
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await logoutUser()
    setUser(null)
    navigate("/login",{replace:true})
  }

  return (
    <div className="bg-linear-to-b from-[#050B1A] to-[#0B1F4D] p-4 py-8 flex flex-col justify-between">
      <div className='flex items-center gap-2 cursor-pointer'>
        <img src={logo} alt="" className='w-8' />
        <p className='text-white font-normal'>AI Interviewer</p>
      </div>
      <div className="flex flex-col gap-4 shadow-2xl text-white">
        <NavLink className={({isActive})=>`w-full flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#182446] transition-all duration-200 ${isActive && "bg-[#192b63] text-[#baaba3e9]"}}`} to="/">
          <House />
          <p>Home</p>
        </NavLink>
        <NavLink className={({isActive})=>`w-full flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#182446] transition-all duration-200 ${isActive && "bg-[#192b63] text-[#baaba3e9]"}}`} to="/interview">  
          <FileText />
          <p>Take Interview</p>
        </NavLink>
        <NavLink className={({isActive})=>`w-full flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#182446] transition-all duration-200 ${isActive && "bg-[#192b63] text-[#baaba3e9]"}`} to="/history">
          <History />
          <p>My Interviews</p>
        </NavLink>
        <NavLink className={({isActive})=>`w-full flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#182446] transition-all duration-200 ${isActive && "bg-[#192b63] text-[#baaba3e9]"}`} to="/analytics">
          <ChartColumn />
          <p>Analytics</p>
        </NavLink>
        <NavLink className={({isActive})=>`w-full flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#182446] transition-all duration-200 ${isActive && "bg-[#192b63] text-[#baaba3e9]"}`} to="/profile">
          <User />
          <p>Profile</p>
        </NavLink>
        <NavLink className={({isActive})=>`w-full flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#182446] transition-all duration-200 ${isActive && "bg-[#192b63] text-[#baaba3e9]"}`} to="/settings">
          <Settings />
          <p>Settings</p>
        </NavLink>
      </div>
      <div className='text-white w-full flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#253666] transition-all duration-200 cursor-pointer' onClick={logoutHandler}>
        <LogOut />
        <p>Logout</p>
      </div>
    </div>
    
  )
}

export default Sidebar
