import logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import {  House,History,FileText,ChartColumn,User,Settings,LogOut} from 'lucide-react'
import { logoutUser } from '../services/authService'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { useState } from 'react'
import ListPopup from './ListPopup'

const Sidebar = () => {

  const {setUser} = useContext(UserContext)
  const [showListPopup, setShowListPopup] = useState(false)
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await logoutUser()
    setUser(null)
    navigate("/login",{replace:true})
  }

  return (
    <>
    <div className="md:hidden flex items-center justify-between p-4 bg-[#050B1A] text-white">
      <div className='flex items-center gap-2 cursor-pointer'
        onClick={() => navigate("/")}>
        <img src={logo} alt="" className='w-8' />
        <h1 className="text-lg font-semibold">AI Interviewer</h1>
      </div>
      <div className='relative'
          onClick={() => setShowListPopup((prev) => !prev)}>
        <button className="text-2xl">
          ☰
        </button>
        <ListPopup showListPopup={showListPopup} />
      </div>
    </div>

    <div className="hidden w-64 bg-linear-to-b from-[#050B1A] to-[#0B1F4D] p-4 py-8 md:flex flex-col justify-between fixed top-0 left-0 h-screen">
      <div className='flex items-center gap-2 cursor-pointer'
        onClick={() => navigate("/")}>
        <img src={logo} alt="" className='w-8' />
        <p className='text-white font-normal text-2xl'>AI Interviewer</p>
      </div>
      <div className="flex flex-col gap-4 text-white">
        <NavLink className={({isActive})=>`w-full flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#182446] transition-all duration-200 ${isActive && "bg-[#192b63] text-[#baaba3e9]"}}`} to="/">
          <House />
          <p>Home</p>
        </NavLink>
        <NavLink className={({isActive})=>`w-full flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#182446] transition-all duration-200 ${isActive && "bg-[#192b63] text-[#baaba3e9]"}}`} to="/interview">  
          <FileText />
          <p>Take Interview</p>
        </NavLink>
        <NavLink className={({isActive})=>`w-full flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#182446] transition-all duration-200 ${isActive && "bg-[#192b63] text-[#baaba3e9]"}`} to="/my-interviews">
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
    </>
  )
}

export default Sidebar
