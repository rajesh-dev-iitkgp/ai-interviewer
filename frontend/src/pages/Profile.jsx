import editProfile from "../assets/edit-profile.png";
import Button from "../components/Common/Button";
import { useState,useContext,useEffect } from "react";
import { updateUser } from "../services/authService";
import { UserContext } from "../context/userContext";
import Loader from "../components/Common/Loader";

const Profile = () => {
  
  const [data, setData] = useState({
    name: "",
    bio: "",
    experienceLevel: "",
  });
  const {user,setUser,loading} = useContext(UserContext)

  useEffect(() => {
    const fetchUser =  () => {
      if(user){
        setData({
            name: user.name || "",
            bio: user.bio || "",
            experienceLevel: user.experienceLevel || "",
        });
      }
    }
    fetchUser();
}, [user]);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const saveChangesHandler = async () => {
    const response = await updateUser(data);
    setUser(response.data.user)
    alert("Changes saved successfully");
  };

  if(loading) return <Loader />

  return (
    <div className="bg-[#f5f7fb] rounded-2xl border border-gray-200 p-6 flex gap-6">

    {/* Left Profile Card */}
        <div className="w-65 border border-gray-200 rounded-2xl p-6 flex flex-col items-center">
            <div className="relative cursor-pointer">
                <img src={editProfile} alt="profile" className="w-32 h-32 rounded-full" />
            </div>
            <h2 className="text-2xl font-semibold mt-5">
                {user.name}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
                {user.email}
            </p>
            <span className="mt-4 px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                {user.experienceLevel}
            </span>
            <p className="text-gray-500 text-sm mt-8">
                Member since { user?.createdAt?.split("T")[0] || "May 1, 2023"}
            </p>
        </div>

        {/* Right Form Section */}
        <div className="flex-1 border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6">
                Personal Information
            </h2>
            <div className="space-y-5">
                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={onChangeHandler}
                        placeholder="Arjun Sharma"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        value={user.email}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 pointer-events-none"
                    />
                </div>
                {/* Bio */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                    </label>
                    <textarea
                        rows={4}
                        name="bio"
                        value={data.bio}
                        onChange={onChangeHandler}
                        placeholder="Aspiring Full Stack Developer passionate about building impactful products and solving real-world problems."
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    />
                </div>
                {/* Experience Level */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Experience Level
                    </label>

                    <select
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                        name="experienceLevel"
                        value={data.experienceLevel}
                        onChange={onChangeHandler}
                    >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
                {/* Save Button */}
                <Button text="Save Changes" onClick={saveChangesHandler}/>
            </div>
        </div>
    </div>
  )
}

export default Profile
