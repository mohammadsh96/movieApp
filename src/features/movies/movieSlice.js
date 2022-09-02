import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import baseURL from '../../common/apis/movieApis';
import {APIkey} from '../../common/apis/movieApiKey';


export const fetchAsyncMovies =createAsyncThunk("movies/fetchAsyncMovies" ,
 async ()=>{
    const movieText ="Harry"
    const response = await  baseURL.get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
    // console.log( "response from api : ",response)
    return (response.data)
    
})
export const fetchAsyncShows =createAsyncThunk("movies/fetchAsyncShows" ,
 async ()=>{
    const seriesText ="spider"
    const response = await  baseURL.get(`?apikey=${APIkey}&s=${seriesText}&type=series`)
    // console.log( "response from api : ",response)
    return (response.data)
    
})
export const fetchAsyncMovieDetails =createAsyncThunk("movies/fetchAsyncMovieDetails" ,
 async (id)=>{
    const response = await  baseURL.get(`?apikey=${APIkey}&i=${id}&Plot=full`)
    console.log( "response from details id : ",response)
    return (response.data)
    
})

const initialState ={
    movies:{},
    shows:{},
    selected:{},
}
const movieSlice = createSlice({

    name:"movies",
    initialState,
    reducers:{

        removeSelectedMovie :(state)=>{
state.removeSelectedMovie={};
        }

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

[fetchAsyncMovieDetails.fulfilled] : (state , {payload})=>{
    console.log("fulfilled",state);
    return {...state ,selected:payload}
},
    },
});
export const {removeSelectedMovie} =movieSlice.actions;
export const getAllShows = (state)=>state.movies.shows
export const getSelectedMovie = (state)=>state.movies.selected
export const getAllMovies = (state)=>state.movies.movies
export default movieSlice.reducer;