import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    loading: false,
    posts: [],
    error: ''
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((resp) => resp.data)
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true
        }),
            builder.addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false,
                    state.posts = action.payload,
                    state.error = ''
            })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false,
                state.posts = '',
                state.error = action.error.message
        })
    }
})

export default postSlice.reducer