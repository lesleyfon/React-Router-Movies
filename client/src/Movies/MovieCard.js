import React from 'react';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  function handleSave(){
    console.log(props)
    if (props.saveMovie) props.saveMovie()
    
  }
  return(
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button" onClick ={handleSave}>Save</div>
    </div>
  );
};

export default MovieCard;
