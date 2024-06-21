import React from 'react';
import './ButtonFile.css'


const ButtonFile = ({src, onClick}) => {

    return (
        <button className='button-file' onClick={onClick}>
            <img src={src} alt=''/>
            File
        </button>
  );
};

export default ButtonFile;