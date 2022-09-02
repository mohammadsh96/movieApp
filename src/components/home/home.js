import React from 'react';
import MovieListing from '../movieListing/movieListing';
import{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchAsyncMovies ,fetchAsyncShows} from '../../features/movies/movieSlice'
const Home = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
       
dispatch(fetchAsyncMovies())
dispatch(fetchAsyncShows())

// eslint-disable-next-line
    },[dispatch])
    return ( <>
    
        <div className="banner-img">
            </div>
    <MovieListing/>
    </>

    );
};

export default Home;