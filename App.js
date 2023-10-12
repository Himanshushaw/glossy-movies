import React, { useState } from "react";
import './App.css';
import { useEffect } from "react";
import SearchIcon from './search.svg';

import MovieCard from "./MovieCard";

// 8d2a3c3f
const API_URL='http://www.omdbapi.com?apikey=8d2a3c3f'; 

const movie1={
    "Title": "Superman, Spiderman or Batman",
    "Year": "2011",
    "imdbID": "tt2084949",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}



const App = () => {

    const [movies , setmovies ] = useState([]);
    const [searchTerm , setSearchTerm] =useState('');

    //function 
    //async means take time to load 
    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    //getting data
    const data = await response.json();
    setmovies(data.Search) ;
    }


    useEffect ( () => {
    //calling function to fetch movies
    searchMovies('Spiderman');
    }, []  )

    return(
         <div className="app">
             <h1>Prime Movies</h1>
             <div className="search">
                <input 
                placeholder="Search for movies" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value) } 

                />

                <img 
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm) }

                />
             </div>


             {
                movies?.length > 0 
                ? ( <div className="container">
                    {movies.map((movie) =>(

                        <MovieCard movie1={movie} /> 
                    ) )}
                        </div>
                  ) 
                  :
                  (
                    <div className="empty">
                        <h2>No Movies in queue</h2>
                    </div>
                  )

             }

             
         </div>
    );
} 

export default App;