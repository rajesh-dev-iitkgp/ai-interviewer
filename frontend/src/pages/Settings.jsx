import { UserCircle2,Lock,Bell,TriangleAlert } from "lucide-react"
import profileIcon from "../assets/profile.png"
import {useContext, useState} from "react"
import { UserContext } from "../context/userContext"
import PasswordPopup from "../components/PasswordPopup"

const Settings = () => {
  const {user} = useContext(UserContext)
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);

  return (
    <div className="bg-[#f5f7fb] p-4 flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col items-start justify-center gap-2">
        <h1 className="font-bold text-4xl">Settings</h1>
        <p className="font-semibold text-gray-500">Manage your account and application preferences</p>
      </div>

      <div className="space-y-8">
    {/* Account Information */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-full bg-blue-100 flex items-center justify-center text-2xl p-3">
                      <UserCircle2 size={30} className="text-blue-600" />
                  </div>
                  <div>
                      <h2 className="text-2xl font-semibold text-gray-800">
                          Account Information
                      </h2>
                      <p className="text-gray-500 text-sm mt-1">
                          Update your personal information and profile details.
                      </p>
                  </div>
              </div>

              <div className="space-y-5">
                  <div className="flex justify-between items-center border-b border-b-gray-400 pb-4">
                      <span className="font-medium text-gray-700">
                          Full Name
                      </span>
                      <span className="text-gray-500">
                          {user.name}
                      </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-b-gray-400 pb-4">
                      <span className="font-medium text-gray-700">
                          Email Address
                      </span>
                      <span className="text-gray-500">
                          {user.email}
                      </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-b-gray-400 pb-4">
                      <span className="font-medium text-gray-700">
                          Experience Level
                      </span>
                      <span className="text-gray-500">
                          {user.experienceLevel}
                      </span>
                  </div>
                  <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">
                          Profile Picture
                      </span>
                      <img
                          src={user.profileImage ? `http://localhost:4000/${user.profileImage}` : profileIcon}
                          alt="profile"
                          className="w-12 h-12 rounded-full object-cover"
                      />
                  </div>
              </div>
          </div>
          {/* Security */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                      <Lock size={30} className="text-blue-600" />
                  </div>
                  <div>
                      <h2 className="text-2xl font-semibold text-gray-800">
                          Security
                      </h2>
                      <p className="text-gray-500 text-sm mt-1">
                          Manage your password and account security.
                      </p>
                  </div>
              </div>
              <div className="flex justify-between items-center border border-gray-400 rounded-xl p-5">
                  <div>
                      <h3 className="font-semibold text-gray-800">
                          Update Password
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                          Change your current password.
                      </p>
                  </div>
                  <button className="px-5 py-2 rounded-xl border border-blue-500 text-blue-500 hover:bg-blue-50 transition"
                      onClick={() => setShowPasswordPopup(true)}>
                      Change Password
                  </button>
                  <PasswordPopup 
                    showPasswordPopup={showPasswordPopup} 
                    setShowPasswordPopup={setShowPasswordPopup} />
              </div>
          </div>
          {/* Notifications */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                      <Bell size={30} className="text-blue-600" />
                  </div>
                  <div>
                      <h2 className="text-2xl font-semibold text-gray-800">
                          Notifications
                      </h2>
                      <p className="text-gray-500 text-sm mt-1">
                          Manage your notification preferences.
                      </p>
                  </div>
              </div>
              <div className="space-y-4">
                  <div className="flex justify-between items-center border border-gray-400 rounded-xl p-5">
                      <div>
                          <h3 className="font-semibold text-gray-800">
                              Email Notifications
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                              Receive important updates and announcements.
                          </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">

                        <input type="checkbox" className="sr-only peer"/>
                        <div className="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition-colors duration-300"></div>
                        <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
                    </label>
                  </div>
                  <div className="flex justify-between items-center border border-gray-400 rounded-xl p-5">
                      <div>
                          <h3 className="font-semibold text-gray-800">
                              Interview Reminders
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                              Get reminders about upcoming interviews.
                          </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer"/>
                          <div className="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition-colors duration-300"></div>
                          <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
                      </label>
                  </div>
              </div>
          </div>
          {/* Danger Zone */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-2xl">
                      <TriangleAlert size={30} className="text-red-600" />
                  </div>
                  <div>
                      <h2 className="text-2xl font-semibold text-red-600">
                          Danger Zone
                      </h2>
                      <p className="text-red-400 text-sm mt-1">
                          Irreversible and permanent actions.
                      </p>
                  </div>
              </div>
              <div className="flex justify-between items-center border border-red-200 bg-white rounded-xl p-5">
                  <div>
                      <h3 className="font-semibold text-gray-800">
                          Delete Account
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                          Once deleted, your account cannot be recovered.
                      </p>
                  </div>
                  <button className="px-5 py-2 rounded-xl border border-red-500 text-red-500 hover:bg-red-100 transition">
                      Delete Account
                  </button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Settings
