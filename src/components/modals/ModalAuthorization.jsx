import React from "react";
import InputAuthorization from './inputs/InputAuthorization.jsx';
import CloseButton from './buttons/ButtonClose.jsx';
import CLOSE from './resource/icons/close.svg';
import './ModalAuthorization.css'


const ModalAuthorization = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <CloseButton src={CLOSE}/>
                <InputAuthorization type='email' plaseholder='Gmail'/>
            </div>
        </div>
    );


}

export default ModalAuthorization;