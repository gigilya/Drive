import React from 'react'
import './NavigationFolder.css';
import FolderIcon from '../../resource/icons/folder.svg'
import ButtonFolder from '../buttons/ButtonFolder';

export default function NavigationFolder() {
  return (
    <div className='line'>
        <div className='section-header'>
            <hr className='hr'></hr>
            <ButtonFolder src={FolderIcon}/>
            <ButtonFolder src={FolderIcon}/>
            <ButtonFolder src={FolderIcon}/>
            <hr className='hr1'></hr>
        </div>
    </div>
  )
}
