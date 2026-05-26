import { UserCircle2,Lock,Bell,TriangleAlert } from "lucide-react"
import profileIcon from "../assets/profile.png"

const Settings = () => {
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
                          Rohit Sharma
                      </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-b-gray-400 pb-4">
                      <span className="font-medium text-gray-700">
                          Email Address
                      </span>
                      <span className="text-gray-500">
                          rohit@gmail.com
                      </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-b-gray-400 pb-4">
                      <span className="font-medium text-gray-700">
                          Experience Level
                      </span>
                      <span className="text-gray-500">
                          Intermediate
                      </span>
                  </div>
                  <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">
                          Profile Picture
                      </span>
                      <img
                          src={profileIcon}
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
                  <button className="px-5 py-2 rounded-xl border border-blue-500 text-blue-500 hover:bg-blue-50 transition">
                      Change Password
                  </button>
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
                      <input type="checkbox" checked readOnly className="w-5 h-5" />
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
                      <input type="checkbox" checked readOnly className="w-5 h-5" />
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
