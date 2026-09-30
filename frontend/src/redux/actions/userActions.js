import api from "../../utils/api"
import{
    userRequest,
    userSuccess,
    userFail,
    logoutFail,
    logoutSuccess,
    updateFail,
    updateSuccess,
    updateRequest,
    updateReset,
    clearErros
}from "../slices/userSlice"
//login
export const login=(email,password)=>async(dispatch)=>{
    try{
        dispatch(userRequest())
        const {data}=await api.post("/v1/users/login",{email,password})
        dispatch(userSuccess(data.data.user))
    }catch(error){
        dispatch(userFail("login failed"))
    }
}
//signup//resgiter
export const register=(userData)=>async(dispatch)=>{
    try{
        dispatch(userRequest());
        const{data}=await api.post("/v1/userss/signup",userData,{
            headers:
            {"Content-Type":"application/json"}

        })
    }catch(error){
        dispatch(userFail(error.response?.data?.message))
    }
}
//loaduser
export const loadUser=()=>async(dispatch)=>{
    try{
        dispatch(userRequest());
        const{data}=await api.get("/v1/user/me")
        dispatch(userSuccess())

    }catch(error){
        dispatch(userFail(error.response?.data?.message))
    }
}
//update profile
export const updateProfile=(userData)=>async(dispatch)=>{
    try{
        dispatch(updateRequest());
        const{data}=await api.put("/v1/user/me/update",userData,{
            headers:
        {"Content-Type" : "multipart/form-data"}

        })
    
    }catch(error){
        dispatch(updateFail(error.response?.data?.message))
    }
}

//logout
export const logout=()=>async(dispatch)=>{
    try{
        await api.get("/v1/users/logout")
        dispatch(logoutSuccess)

    }catch(error){
        dispatch(logoutFail(error.response?.data?.message))
    }
}