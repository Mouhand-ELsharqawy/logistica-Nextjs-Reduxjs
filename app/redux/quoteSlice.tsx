"use client";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getQuotes = createAsyncThunk("quote/getQuotes",async(_,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/data");
        const data = await res.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
});

export const insertQuote = createAsyncThunk("quote/insertQuotes",async(quoteData,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/data",{
            method: "POST",
            body: JSON.stringify(quoteData),
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

export const getOneQuote = createAsyncThunk("quote/getQuote",async(id,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/data/"+id);
        const data = await res.json()
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
});

export const updateQuote = createAsyncThunk("quote/updateQuote",async(id,quoteData,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/data/"+id,{
            method:"PATCH",
            body:JSON.stringify(quoteData),
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

export const deleteQuote = createAsyncThunk("quote/deleteQuote",async(id,thunkAPI)=>{
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


const quoteSlice = createSlice({
    name:"quote",
    initialState:{ isLoading:false, quotes:[], error:null},
    [getQuotes.pending]:(state,action)=>{
        state.isLoading = true;
        state.error =null;
    },
    [getQuotes.fulfilled]:(state,action)=>{
        state.isLoading = false;
        state.quotes = action.payload; 
    },
    [getQuotes.rejected]:(state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
    },
    [insertQuote.pending]:(state,action)=>{
        state.isLoading = true;
        state.error =null;
    },
    [insertQuote.fulfilled]:(state,action)=>{
        state.isLoading = false;
        state.quotes.push(action.payload);
    },
    [insertQuote.rejected]:(state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
    },
    [getOneQuote.pending]:(state,action)=>{
        state.isLoading = true;
        state.error =null;
    },
    [getOneQuote.fulfilled]:(state,action)=>{
        state.isLoading = false;
        state.quotes = action.payload;
    },
    [getOneQuote.rejected]:(state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
    },
    [updateQuote.pending]:(state,action)=>{
        state.isLoading = true;
        state.error =null;
    },
    [updateQuote.fulfilled]:(state,action)=>{
        state.isLoading = false;
        state.quotes[action.payload.id] = action.payload;
    },
    [updateQuote.rejected]:(state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
    },
    [deleteQuote.pending]:(state,action)=>{
        state.isLoading = true;
        state.error =null;
    },
    [deleteQuote.fulfilled]:(state,action)=>{
        state.isLoading = false;
        state.quotes = state.quotes.filter( el => el.id !== action.payload);
    },
    [deleteQuote.rejected]:(state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
    }
})

export default quoteSlice.reducer;