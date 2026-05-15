/* eslint-disable react-hooks/set-state-in-effect */
import { createContext,useState } from "react";
import { useEffect } from "react";
import { getCurrentUser } from "../services/authService";

const UserContext = createContext();

const UserProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const fetchUser = async ()=>{
        setLoading(true);
        try {
            const res = await getCurrentUser()
            setUser(res.user);
        } catch (error) {
            console.log(error)
            setUser(null);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchUser();
    },[])

    return (
        <UserContext.Provider value={{user,setUser,fetchUser,loading}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext,UserProvider}