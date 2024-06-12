import React from 'react';
import './ButtonAuthorization.css'

const Button = () => {
    const handleClick = () => {
      console.log('click');
    };
  
    return (
      <button className="button" onClick={handleClick}>
        Sign in
      </button>
    );
  };

export default Button;