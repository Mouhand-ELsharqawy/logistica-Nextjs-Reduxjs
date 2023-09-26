"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getServices = createAsyncThunk("service/getServices",async(_,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/data");
        const data = await res.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
});

export const insertService = createAsyncThunk("service/insertService",async(serviceData,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res= await fetch("http://localhost:3005/data",{
        method:"POST",
        body: JSON.stringify(serviceData),
        headers:{
            'Content-type':'application/json; charset = UTF-8'
        }
        });
        const data = await res.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
});

export const getOneService = createAsyncThunk("service/getService",async(id,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/data/"+id);
        const data = await res.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
});

export const updateService = createAsyncThunk("service/updateService",async(id,serviceData,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/data/"+id,{
            method:"PATCH",
            body:JSON.stringify(serviceData),
            headers:{
                'Content-type':'application/json; charset = UTF-8'
            }
        });
        const data = await res.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
});

export const deleteService = createAsyncThunk("service/deleteService",async(id,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/data/"+id,{
            method:"DELETE"
        });
        return id;
    }catch(error){
        return rejectWithValue(error.message);
    }
})


const serviceSlice = createSlice({
    name:"service",
    initialState:{ isLoading:false, services:[], error:null },
    extraReducers:{
        [getServices.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [getServices.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.services = action.payload;
        },
        [getServices.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        [insertService.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [insertService.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.services.push(action.payload);
        },
        [insertService.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        [getOneService.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [getOneService.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.services = action.payload;
        },
        [getOneService.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        [updateService.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [updateService.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.services[action.payload.id] = action.payload;
        },
        [updateService.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteService.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [deleteService.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.services = state.services.filter(el=> el.id !== action.payload);
        },
        [deleteService.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }
        
    }
});

export default serviceSlice.reducer;