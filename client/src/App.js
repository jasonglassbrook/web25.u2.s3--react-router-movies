/// external modules ///
import React from 'react';
import { Route } from 'react-router-dom';

/// internal modules ///
import SavedList from './Movies/SavedList';
import MoviesList from './Movies/MoviesList';
import Movie from './Movies/Movie';

/***************************************
  COMPONENTS
***************************************/
const App = (props) => {
  /// states ///
  const [savedList , setSavedList] = React.useState ([]);

  /// effects ///
  const addToSavedList = (movie) => {
    setSavedList ([...savedList , movie]);
  };

  /// this ///
  return (
    <div>
      <SavedList list={savedList} />
      <Route
        exact path='/'
        render={(props) => (
          <MoviesList {...props} save={addToSavedList}/>
        )}
      />
      <Route
        path='/movies/:id'
        render={(props) => (
          <Movie {...props} save={addToSavedList}/>
        )}
      />
    </div>
  );
};

/**************************************/
export default App;
