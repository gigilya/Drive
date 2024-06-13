import React from 'react';
import './ButtonClose.css'


const CloseButton = ({src}) => {
    const handleClick = () => {
        console.log('click');
    };

    return (
        <button className='button-close' onClick={handleClick}>
            <img src={src} alt=''/>
        </button>
  );
};

export default CloseButton;