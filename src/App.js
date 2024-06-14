// import './App.css';
import React, { useState } from 'react';
import ButtonAuthorization from './components/buttons/ButtonAutorization.jsx';
import ModalAuthorization from './components/modals/ModalAuthorization.jsx';

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div>
      <ButtonAuthorization onClick={() => setModalActive(true)}/>
      <ModalAuthorization active={modalActive} setActive={setModalActive}/>
    </div>
  );
}

export default App;