import React from 'react';
import './ButtonSave.css'

const ButtonSave = ({onClick}) => {
  
    return (
      <button className="button" onClick={onClick}>
        Save
      </button>
    );
  };

export default ButtonSave;