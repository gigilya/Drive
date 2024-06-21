import React from 'react';
import './settingspage.css';
import ButtonSave from "../../components/buttons/ButtonSave";
import ButtonCancel from "../../components/buttons/ButtonCancel";
import InputAuthorization from "../../components/inputs/InputAuthorization";
//import icon from "../../resource/icons/profile.svg";


function settingspage() {
    return (
        <body>
        <div className="header">

        </div>
        <div className="container">
            <div className="content">
                <img src={"https://www.svgrepo.com/show/504008/user-people-account.svg"} alt=""/>
                <InputAuthorization className="input" type="name" placeholder="Name" />
                <InputAuthorization className="input" type="email" placeholder="Gmail" />
                <ButtonSave/>
                <ButtonCancel/>
            </div>
        </div>
        </body>
    );
}

export default settingspage;