import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import MovieCard from './MovieCard'
import { promises } from 'dns';
const Movie = (props) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const id = props.match.params.moviesId;
       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params.moviesId]);

  // Uncomment this only when you have moved on to the stretch goals

  const saveMovie = () => {
    console.log(props)
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)

  }

    const { title, director, metascore, stars } = movie;


  return (
    <>
    {/* If The Movie Object is undefined we return a Div saying Sorry ... */}
    { !movie || !title || !director || !metascore || !stars ? 
        <WrongUrl><h2>Loading movie information...</h2></WrongUrl>  
      :

        <MovieCard 
          movie={movie} 
          saveMovie = {saveMovie}
        />
  }
    </>
  );
}

export default Movie;


const WrongUrl = styled.div`
  text-align: center;
  font-size: 2rem;
`;