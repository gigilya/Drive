import React from 'react'
import './Header.css';
import ProfileIcon from '../../resource/icons/profile.svg';
import ProfileButton from '../buttons/ButtonProfile';
import SettingsIcon from '../../resource/icons/settings.svg';
import SettingsButton from '../buttons/SettingsButton';
export default function Header() {
  return (
    <div className='container'>
        <div className='header-profile'>
            <ProfileButton src={ProfileIcon}/>
            <SettingsButton src={SettingsIcon}/>
        </div>
    </div>
  )
}
