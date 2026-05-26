import { Edit2,Trash } from "lucide-react"
const MenuPopup = ({showMenu, setShowMenu,inputRef}) => {

  return (
    showMenu ? 
        <div className="absolute top-36 right-0 w-52 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 overflow-hidden">

            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
                onClick={() => {inputRef.current.click();
                                setShowMenu(false);}}>
                <Edit2 size={20}/>
                <span>Edit Profile</span>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-500 transition">
                <Trash size={20}/>
                <span>Remove Profile</span>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
                onClick={() => setShowMenu(false)}>
                <span>❌</span>
                <span>Cancel</span>
            </button>

        </div> : null
    )
}

export default MenuPopup
