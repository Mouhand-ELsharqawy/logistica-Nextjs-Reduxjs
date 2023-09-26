"use client";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getPrices = createAsyncThunk("price/getPrices",async(_,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/data");
        const data = await res.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
});

export const insertPrice = createAsyncThunk("price/insertPrice",async(priceDate,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/data",{
            method:"POST",
            body: JSON.stringify(priceDate),
            headers:{   
                    'Content-type':'application/json; charset = UTF-8'
            }
        });
        const data = await res.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const getOnePrice = createAsyncThunk("price/getOnePrice", async(id,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/data/"+id);
        const data = await res.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
});

export const updatePrice = createAsyncThunk("price/updatePrice",async(id,priceData,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/data/"+id,{
            method:"PATCH",
            body:JSON.stringify(priceData),
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

export const deletePrice = createAsyncThunk("price/deletePrice",async(id,thunkAPI)=>{
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

const priceSlice = createSlice({
    name:"price",
    initialState:{ isLoading:false, prices:[], error:null },
    extraReducers:{
        [getPrices.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [getPrices.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.prices = action.payload;
        },
        [getPrices.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        [insertPrice.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [insertPrice.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.prices.push(action.payload);
        },
        [insertPrice.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        [getOnePrice.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [getOnePrice.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.prices = action.payload;
        },
        [getOnePrice.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        [updatePrice.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [updatePrice.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.prices[action.payload.id];
        },
        [updatePrice.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        [deletePrice.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [deletePrice.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.prices = state.prices(el => el.id !== action.payload);
        },
        [deletePrice.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default priceSlice.reducer;
