/// external modules ///
import React from 'react';
import { Link } from 'react-router-dom';

/// internal modules ///
import Button from './Button';

/***************************************
  COMPONENTS
***************************************/
const LinkButton = (props) => {
  /// this ///
  return (
    <Link {...props}>
      <Button {...props}>{props.children}</Button>
    </Link>
  );
};

/**************************************/
export default LinkButton;
