import React from 'react';
import './RectangleWithHuman.css';

function RectangleWithHuman(props) {
    return (
        <div className = 'base'>
            <div className='circle'/>
            <label>{props.title}</label>
        </div>
    );
  }
  
export default RectangleWithHuman;