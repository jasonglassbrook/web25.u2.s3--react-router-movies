/// external modules ///
import React from 'react';

/// internal modules ///
import ButtonsGroup from './ButtonsGroup';
import LinkButton from './LinkButton';

/***************************************
  COMPONENTS
***************************************/
const SavedList = (props) => {
  /// this ///
  return (
    <div className="saved-movies wrapper">
      <ButtonsGroup className="saved-movies">
        <LinkButton className="home-button" to='/'>Home</LinkButton>
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
