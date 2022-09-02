import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import baseURL from '../../common/apis/movieApis';
import {APIkey} from '../../common/apis/movieApiKey';


export const fetchAsyncMovies =createAsyncThunk("movies/fetchAsyncMovies" ,
 async ()=>{
    const movieText ="Harry"
    const response = await  baseURL.get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
    console.log( "response from api : ",response)
    return (response.data)
    
})
export const fetchAsyncShows =createAsyncThunk("movies/fetchAsyncShows" ,
 async ()=>{
    const seriesText ="spider"
    const response = await  baseURL.get(`?apikey=${APIkey}&s=${seriesText}&type=series`)
    console.log( "response from api : ",response)
    return (response.data)
    
})

const initialState ={
    movies:{},
    shows:{},
}
const movieSlice = createSlice({

    name:"movies",
    initialState,
    reducers:{

        addMovies:(state , {payload})=>{
            state.movies =payload;
            
        },

    },
    extraReducers:{
[fetchAsyncMovies.pending] : ()=>{
    console.log("pending" );
},
[fetchAsyncMovies.fulfilled] : (state , {payload})=>{
    console.log("fulfilled",state);
    return {...state ,movies:payload}
},
[fetchAsyncMovies.rejected] : ()=>{
    console.log("fulfilled");
},
[fetchAsyncShows.fulfilled] : (state , {payload})=>{
    console.log("fulfilled",state);
    return {...state ,shows:payload}
},

    },
});
export const {addMovies} =movieSlice.actions;
export const getAllShows = (state)=>state.movies.shows

export const getAllMovies = (state)=>state.movies.movies
export default movieSlice.reducer;