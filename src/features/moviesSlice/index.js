import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constans/data";

// import createSlice
// lalu buat slice untuk generate action dan reducer
// menerima params object : name, initialstate, reducers
const moviesSlice = createSlice({
    name : "Movie Slice",
    initialState:{
        movies: data,
    },
    reducers: {
        addMovie(state, action){
            // add movie to movies
            state.movies.push(action.payload);
        },
        deleteMovie(){},
    },
});
// generate action dan reducers
const moviesReducer =  moviesSlice.reducer;
const {addMovie, deleteMovie} = moviesSlice.actions;

// export action dan reducer
export default moviesReducer;
export { addMovie, deleteMovie};