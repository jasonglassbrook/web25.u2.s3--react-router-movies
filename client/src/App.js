/// external modules ///
import React, { useState } from 'react';

/// internal modules ///
import SavedList from './Movies/SavedList';

/***************************************
  COMPONENTS
***************************************/
const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
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
