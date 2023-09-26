"use client";
import { configureStore } from "@reduxjs/toolkit";
import testimonials from "./testimonialSlice";
import experts from "./technicianSlice";
import contacts from "./contactSlice";
import services from "./serviceSlice";
import quotes from "./quoteSlice";
import prices from "./priceSlice";
const store = configureStore({
    reducer:{
        testimonials,
        experts,
        contacts,
        services,
        quotes,
        prices
    }
})

export default store;