/// external modules ///
import React from 'react';
import { Link } from 'react-router-dom';
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
      {movies.map ((movie) => (
        <Link to={`/movies/${movie.id}`}>
          <MovieCard key={movie.id} movie={movie}/>
        </Link>
      ))}
    </div>
  );
}

/**************************************/
export default MoviesList;
