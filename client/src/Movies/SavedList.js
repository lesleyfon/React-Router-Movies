import React from 'react';
import {Link } from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map((movie, i) => (
      <span className="saved-movie" key={i} >{ movie.title }</span>
    ))}
    <Link to='/'>
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
