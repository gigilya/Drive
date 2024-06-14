import React from 'react';
import './InputAuthorization.css'

const InputAuthorization = ({ type, placeholder }) => {
    return (
      <div>
        <label>
          <input className='input' type={type} placeholder={placeholder} />
        </label>
      </div>
    );
  };

  export default InputAuthorization;