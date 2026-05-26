import {useState} from 'react'

const PasswordPopup = ({showPasswordPopup, setShowPasswordPopup}) => {
    const [data, setData] = useState({
        email: "",
        currentPassword: "",
        newPassword: ""
    });

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const passwordUpdateHandler = async () => {
        if (!data.email || !data.newPassword || !data.confirmNewPassword) {
            alert("Please fill all fields");
            return;
        }
        if (data.newPassword !== data.confirmNewPassword) {
            alert("Passwords do not match");
            return;
        }
    };

    return (
        showPasswordPopup ?
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">
                            Change Password
                        </h2>
                        <p className="text-sm text-gray-500 mt-2">
                            Update your account password securely.
                        </p>
                    </div>
                    <button className="w-10 h-10 rounded-full hover:bg-gray-100 transition flex items-center justify-center text-xl"
                        onClick={() => setShowPasswordPopup(false)}>
                        ✕
                    </button>
                </div>
                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Your Email
                        </label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            value = {data.email}
                            onChange = {onChangeHandler}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Current Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            value = {data.currentPassword}
                            onChange = {onChangeHandler}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            New Password
                        </label>
                        <input
                            type="password"
                            placeholder="Re-enter new password"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            value = {data.newPassword}
                            onChange = {onChangeHandler}
                        />
                    </div>
                </div>
                <div className="flex gap-4 mt-8">
                    <button className="flex-1 border border-gray-300 rounded-xl py-3 font-medium hover:bg-gray-100 transition"
                        onClick={() => setShowPasswordPopup(false)}>
                        Cancel
                    </button>
                    <button className="flex-1 bg-blue-600 text-white rounded-xl py-3 font-medium hover:bg-blue-700 transition"
                        onClick={passwordUpdateHandler}>
                        Update Password
                    </button>
                </div>
            </div>
        </div>
        : null
    )
}

export default PasswordPopup
