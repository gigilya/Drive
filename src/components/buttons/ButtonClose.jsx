import React from 'react';
import './ButtonClose.css'


const CloseButton = ({src, onClick}) => {

    return (
        <button className='button-close' onClick={onClick}>
            <img src={CLOSE} alt=''/>
        </button>
  );
};

export default CloseButton;