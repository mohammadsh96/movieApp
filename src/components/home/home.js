import React from 'react';
import MovieListing from '../movieListing/movieListing';
import{useEffect} from 'react';
import baseURL from '../../common/apis/movieApis';
import {APIkey} from '../../common/apis/movieApiKey';
import {useDispatch} from 'react-redux';
import {addMovies} from '../../features/movies/movieSlice'
const Home = () => {
    const movieText ="Harry"
    const dispatch = useDispatch();
    useEffect(()=>{
       
const fetchMovie =async ()=>{
const response = await  baseURL.get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
.catch((err)=>{console.log(err)
})
console.log( "response from api : ",response)
dispatch(addMovies(response.data))
}
fetchMovie()
    },[])
    return ( <>
    
        <div className="banner-img">
            </div>
    <MovieListing/>
    </>

    );
};

export default Home;