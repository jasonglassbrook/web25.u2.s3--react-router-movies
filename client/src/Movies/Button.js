/// external modules ///
import React from 'react';

/***************************************
  COMPONENTS
***************************************/
const Button = (props) => {
  /// this ///
  return (
    <button className="button" {...props}>
      {props.children}
    </button>
  );
};

/**************************************/
export default Button;
