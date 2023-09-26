"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createContact = createAsyncThunk("contact/createContact",async(data,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/data",{
            method:"POST",
            body: JSON.stringify(data),
            headers:{
                'Content-type':'application/json; charset = UTF-8'
            }
        }) 
    }catch(error){
        return rejectWithValue(error.message);
    }
});

const contactSlice = createSlice({
    name:"contact",
    initialState:{ isLoading:false, contacts:[], error:null },
    extraReducers:{
        [createContact.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [createContact.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.contacts.push(action.payLoad);
        
        },
        [createContact.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default contactSlice.reducer;
