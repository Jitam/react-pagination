const { configureStore } = require("@reduxjs/toolkit");

import postReducer from '../../features/postSlice'

const store = configureStore({
    reducer: {
        posts: postReducer
    }
})

export default store