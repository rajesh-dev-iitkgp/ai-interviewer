/* eslint-disable react-hooks/set-state-in-effect */
import { createContext,useState } from "react";
import { useEffect } from "react";
import { getCurrentUser } from "../services/authService";

const UserContext = createContext();

const UserProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const fetchUser = async ()=>{
        try {
            const res= await getCurrentUser()
            setUser(res.data.user);
        } catch (error) {
            console.log(error)
            setUser(null);
        }
    }

    useEffect(()=>{
        fetchUser();
    },[])

    return (
        <UserContext.Provider value={{user,setUser,fetchUser}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext,UserProvider}