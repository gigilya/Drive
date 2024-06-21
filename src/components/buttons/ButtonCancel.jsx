import React from 'react';
import './ButtonCancel.css'

const ButtonSave = ({onClick}) => {

    return (
      <button className="button" onClick={onClick}>
        Cancel
      </button>
    );
  };

export default ButtonSave;