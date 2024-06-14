import React from "react";
import ButtonAuthorization from "../buttons/ButtonAutorization";
import InputAuthorization from "../inputs/InputAuthorization";
// import CloseButton from "../buttons/ButtonClose";
import icon from "../../resource/icons/close.svg";
import './ModalAuthorization.css';

const ModalAuthorization = ({ active, setActive, children }) => {
  return (
    <div className={active ? "modal active" : "modal"}>
      <div className="modal-content">
        {children}
        <button className="button-close" onClick={() => setActive(false)}>
          <img src={icon} alt="Close" />
        </button>
        <InputAuthorization className="input" type="email" placeholder="Gmail" />
        <InputAuthorization className="input" type="password" placeholder="Password" />
        <ButtonAuthorization className="button-auth" />
      </div>
    </div>
  );
};

export default ModalAuthorization;