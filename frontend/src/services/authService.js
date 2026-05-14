import api from "./apiService.js";

const loginUser = async (data)=>{
    const response = await api.post("/api/user/login",data)
    return response.data
}

const registerUser = async (data)=>{
    const response = await api.post("/api/user/register",data)
    return response.data
}

const logoutUser = async ()=>{
    const response = await api.post("/api/user/logout")
    return response.data
}

const getCurrentUser = async ()=>{ 
    const response = await api.get("/api/user/me")
    return response.data
}

export {loginUser,registerUser,logoutUser,getCurrentUser}