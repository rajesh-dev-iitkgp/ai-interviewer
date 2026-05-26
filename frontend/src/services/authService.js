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

const updateUser = async (data)=>{
    const response = await api.put("/api/user/update",data)
    return response
}

const updatePassword = async (data)=>{
    const response = await api.put("/api/user/update-password",data)
    return response
}

export {loginUser,registerUser,logoutUser,getCurrentUser,updateUser,updatePassword}