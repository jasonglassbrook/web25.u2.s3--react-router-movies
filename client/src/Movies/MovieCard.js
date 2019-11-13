/// external modules ///
import React from 'react';

/// internal modules ///
import ButtonsGroup from './ButtonsGroup';
import Button from './Button';
import LinkButton from './LinkButton';

/***************************************
  COMPONENTS
***************************************/
const MovieCard = (props) => {
  /// states ///
  const buttons = props.buttons;
  const movie = props.movie;

  /// thing ///
  return (
    <div className="movie-card wrapper">
      <ButtonsGroup className="movie-card">
        {(buttons.view.use)
          ? (<LinkButton className="view-button" to={buttons.view.url}>View</LinkButton>)
          : (<></>)
        }
        {(buttons.save.use)
          ? (<Button className="save-button" onClick={buttons.save.onClick}>Save</Button>)
          : (<></>)
        }
      </ButtonsGroup>
      <div className="movie-card content">
        <h2>{movie.title}</h2>
        <div className="movie-director">
          Director: <em>{movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{movie.metascore}</strong>
        </div>
        <h3>Actors</h3>
  
        {movie.stars.map ((star) => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    </div>
  );
};

/**************************************/
export default MovieCard;
