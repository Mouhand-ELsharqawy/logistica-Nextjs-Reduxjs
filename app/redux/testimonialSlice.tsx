"use client";
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const getTestimonial = createAsyncThunk("testimonial/getTestimonial",async(_,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json()
        return data;
    } catch(error){
        return rejectWithValue(error.message);
    }
});

const testimonialSlice = createSlice({
    name:"testimonial",
    initialState:{ isLoading: false,testimonials:[],error:null},
    extraReducers:{
        [getTestimonial.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [getTestimonial.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.testimonials = action.payload;
        },
        [getTestimonial.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default testimonialSlice.reducer;


