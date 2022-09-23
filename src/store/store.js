import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice";


const store =  configureStore({
    reducer: {
        news: newsSlice
    }
    
})

window.store = store;

export default store;