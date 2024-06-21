import React from 'react';
import './ButtonFolder.css'


const ButtonFolder = ({src, onClick}) => {

    return (
        <button className='button-folder' onClick={onClick}>
            <img src={src} alt=''/>
            Label
        </button>
  );
};

export default ButtonFolder;