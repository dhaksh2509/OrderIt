import { createSlice } from "@reduxjs/toolkit";
const initialState={
    user:null,
    loading:false,
    isAuthenticated:false,
    error:null,
    isUpdated:false,
    message:null,
    success:null
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        userRequest:(state)=>{
            state.loading=true,
            state.isAuthenticated=false

        },
        userSuccess:(state,action)=>{
            state.loading=false,
            state.isAuthenticated=true,
            state.user=action.payload//stores the user data 
        },
        userFail:(state,action)=>{
            state.loading=false,
            state.isAuthenticated=false,
            state.user=null,
            state.error=action.payload
        },
        //logout
        logoutSuccess:(state)=>{
            state.loading=false,
            state.isAuthenticated=false,
            state.user=null
        },
        logoutFail:(state,action)=>{
            state.error=action.payload

        },
        updateRequest:(state)=>{
            state.loading=true
        },
        updateSuccess:(state,action)=>{
            state.loading=false,
            state.isUpdated=action.payload
        },
        updateFail:(state,action)=>{
            state.loading=false,
            state.error=action.payload
        },
        updateReset:(state)=>{
            state.isUpdated=false
        },
        clearErros:(state)=>{
            state.error=null
        }



    }

})
export const{
    userRequest,userSuccess,
    userFail,logoutFail,logoutSuccess,updateFail,updateSuccess,updateRequest,updateReset,clearErros
}=userSlice.actions
export default userSlice.reducer