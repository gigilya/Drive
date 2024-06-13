import React from 'react';
import './ButtonAuthorization.css'

const ButtonAuthorization = ({onClick}) => {
  
    return (
      <button className="button" onClick={onClick}>
        Sign in
      </button>
    );
  };

export default ButtonAuthorization;