/// external modules ///
import React from 'react';

/***************************************
  COMPONENTS
***************************************/
const ButtonsGroup = (props) => {
  /// this ///
  return (
    <div className="buttons-group">
      {props.children}
    </div>
  );
};

/**************************************/
export default ButtonsGroup;
