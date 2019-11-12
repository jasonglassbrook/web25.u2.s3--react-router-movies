/// external modules ///
import React from 'react';

/***************************************
  COMPONENTS
***************************************/
const SavedList = (props) => {
  /// this ///
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map (movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button">Home</div>
    </div>
  );
};

/**************************************/
export default SavedList;
