/// external modules ///
import React from 'react';

/// internal modules ///
import SavedList from './Movies/SavedList';

/***************************************
  COMPONENTS
***************************************/
const App = () => {
  const [savedList , setSavedList] = React.useState ([]);

  const addToSavedList = (movie) => {
    setSavedList ([...savedList , movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
    </div>
  );
};

/**************************************/
export default App;
