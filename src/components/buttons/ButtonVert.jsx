import React from 'react';
import './ButtonVert.css'


const ButtonVert = ({src, onClick}) => {

    return (
        <button className='button-more' onClick={onClick}>
            <img src={src} alt=''/>
        </button>
  );
};

export default ButtonVert;