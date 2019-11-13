/// external modules ///
import React from 'react';
import axios from 'axios';

/// internal modules ///
import MovieCard from './MovieCard';

/***************************************
  COMPONENTS
***************************************/
const Movie = (props) => {
  /// states ///
  const [id] = React.useState (props.match.params["id"]);
  const [url] = React.useState (props.match.url);
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

  /// this ///
  if (movie === undefined) {
    return (
      <div className="loading">Loading movie information...</div>
    );
  } else {
    return (
      <MovieCard
        movie={movie}
        buttons={{
          save : { use : true , onClick : () => {props.save (movie)} },
        }}
      />
    );
  }
}

/**************************************/
export default Movie;
