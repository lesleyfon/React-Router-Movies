import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  function addToSavedList(){
    axios.post('http://localhost:5000/api/movies')
      .then(res=>{
        console.log(res)
      }).catch(err=> new Error('Server Error', err))
  }
  return (
    
    <div className="movie-list">
      {movies.map(movie => (
        <Link 
          to={`/movies/${movie.id}`}
        
          key={movie.id + 1}
          >
          <MovieCard 
          movie={movie} 
          />
        </Link>
      ))}
    </div>
  );
}


export default MovieList;
