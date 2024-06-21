import React from 'react';
import './SettingsButton.css'


const SettingsButton = ({src, onClick}) => {

    return (
        <button className='button-settings' onClick={onClick}>
            <img src={src} alt=''/>
        </button>
  );
};

export default SettingsButton;