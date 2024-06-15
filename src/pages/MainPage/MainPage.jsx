import React, {useState} from 'react';
import './mainpage.css';
import RectangleWithHuman from '../../components/card/RectangleWithHuman';
import ButtonAuthorization from '../../components/buttons/ButtonAutorization';
import ModalAuthorization from "../../components/modals/ModalAuthorization";

function MainPage() {
    const [modalActive, setModalActive] = useState(false);

    return (
        <body>
        <div className="header">
            <ButtonAuthorization onClick={() => setModalActive(true)}/>
            <ModalAuthorization active={modalActive} setActive={setModalActive}/>
        </div>
        <div className="container">
            <div className='info'>
                <h1>
                    KPTC-Drive-3-1
                </h1>
            </div>
            <h2>
                Над проектом работали
            </h2>
            <div className="content">
                    <RectangleWithHuman title='DoctorProf'/>
                    <RectangleWithHuman title='ARTYW375'/>
                    <RectangleWithHuman title='Bloody1807'/>
                    <RectangleWithHuman title='d1marrow'/>
                    <RectangleWithHuman title='d3k2p'/>
                    <RectangleWithHuman title='GreenWolk'/>
                    <RectangleWithHuman title='Kati738'/>
                    <RectangleWithHuman title='Marisssss'/>
                    <RectangleWithHuman title='mcganky'/>
                    <RectangleWithHuman title='PawelBoB'/>
                    <RectangleWithHuman title='Dmitry'/>
                    <RectangleWithHuman title='tardiss'/>
                    <RectangleWithHuman title='v1ksarion'/>
                    <RectangleWithHuman title='gj%x7t%'/>
                    <RectangleWithHuman title=''/>
            </div>
        </div>
        </body>
    );
}

export default MainPage;
