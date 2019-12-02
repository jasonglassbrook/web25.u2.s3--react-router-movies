/// external modules ///
import React from 'react';
import axios from 'axios';

/// internal modules ///
import MovieCard from './MovieCard';

/***************************************
  COMPONENTS
***************************************/
const MoviesList = (props) => {
  /// state ///
  const [movies , setMovies] = React.useState ([]);

  /// effects ///
  React.useEffect (() => {
    const getMovies = () => {
      axios
        .get ('http://localhost:5000/api/movies')
        .then ((response) => {
          setMovies (response.data);
        })
        .catch ((error) => {
          console.error ('Server Error' , error);
        });
    }

    getMovies ();
  } , []);

  /// thing ///
  return (
    <div className="movie-list">
      {movies.map ((movie) => {
        const id = movie.id;
        const url = `/movies/${id}`;

        return (
          <MovieCard
            key={id}
            movie={movie}
            buttons={{
              view : { use : true , to  : url },
              save : { use : true , onClick : () => {props.save (movie)} },
            }}
          />
        );
      })}
    </div>
  );
}

/**************************************/
export default MoviesList;
