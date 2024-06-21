import React from 'react';
import './ButtonProfile.css'


const ProfileButton = ({src, onClick}) => {

    return (
        <button className='button-profile' onClick={onClick}>
            <img src={src} alt=''/>
        </button>
  );
};

export default ProfileButton;
