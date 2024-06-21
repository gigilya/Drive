import React from 'react';
import './settingspage.css';
import ButtonSave from "../../components/buttons/ButtonSave";
import ButtonCancel from "../../components/buttons/ButtonCancel";
import InputAuthorization from "../../components/inputs/InputAuthorization";
import icon from "../../resource/icons/User Images.svg";


function SettingsPage() {
    return (
        <body>
        <div className="container">
            <div className="content">
                <img src={icon} alt="изображение не найдено"/>
                <InputAuthorization className="input" type="name" placeholder="Name" />
                <InputAuthorization className="input" type="email" placeholder="Gmail" />
                <div className='buttons'>
                    <ButtonSave/>
                    <ButtonCancel/>
                </div>
            </div>
        </div>
        </body>
    );
}

export default SettingsPage;