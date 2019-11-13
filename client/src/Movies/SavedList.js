/// external modules ///
import React from 'react';
import { Link } from 'react-router-dom';

/// internal modules ///
import ButtonsGroup from './ButtonsGroup';

/***************************************
  COMPONENTS
***************************************/
const SavedList = (props) => {
  /// this ///
  return (
    <div className="saved-movies wrapper">
      <ButtonsGroup className="saved-movies">
        <Link className="home-button" to='/'>Home</Link>
      </ButtonsGroup>
      <div className="saved-movies content">
        <h3>Saved Movies:</h3>
        <ul className="saved-movies list">
          {props.list.map ((movie) => (
            <li className="saved-movie">{movie.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/**************************************/
export default SavedList;
