// import './App.css';
import React from 'react';
import Button from './components/buttons/ButtonAutorization.jsx';
import InputAuthorization from './components/inputs/InputAuthorization.jsx';
import CloseButton from './components/buttons/ButtonClose.jsx';

function App() {
  return (
    <div>
      <Button />
      <InputAuthorization type="email" placeholder="Gmail" />
      <br/>
      <InputAuthorization type="password" placeholder="Password" />
      <CloseButton />
    </div>
  );
}

export default App;
