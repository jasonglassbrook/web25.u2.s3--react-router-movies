/// external modules ///
import React from 'react';
import axios from 'axios';

/***************************************
  COMPONENTS
***************************************/
const Movie = (props) => {
  /// states ///
  const [id , setId] = React.useState (props.match.params["id"]);
  const [movie , setMovie] = React.useState ();

  /// effects ///
  React.useEffect (() => {
    axios
      .get (`http://localhost:5000/api/movies/${id}`)
      .then ((response) => {
        setMovie (response.data);
      })
      .catch ((error) => {
        console.error (error);
      });
  } , [id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList (movie)
  // }

  if (movie === undefined) {
    return <div>Loading movie information...</div>;
  }

  const { title , director , metascore , stars } = movie;
  
  /// this ///
  return (
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

        {stars.map ((star) => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}

/**************************************/
export default Movie;
