import { createSlice } from "@reduxjs/toolkit"


const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: []
    },


    reducers: {
        searchNews(state, action) {},

        getNews(state, action) {},
    }
})

export default newsSlice.reducer;