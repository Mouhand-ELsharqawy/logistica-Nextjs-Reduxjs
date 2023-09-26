"use client";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getExpert = createAsyncThunk("expert/getExpert",async(_,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res= await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
});

const expertSlice = createSlice({
    name:"expert",
    initialState:{ isLoading:false,experts:[],error:null },
    extraReducers:{
        [getExpert.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [getExpert.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.experts = action.payload;
        },
        [getExpert.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default expertSlice.reducer;