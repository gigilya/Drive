import React from 'react';
import './mainPage.css';
import ButSignIn from '../../components/buttons/ButSignIn';
import RectangleWithHuman from '../../components/buttons/RectangleWithHuman';

function Mainpage() {
  return (
    <div className="Mainpage">
      <body>
        <ButSignIn />

        <div class='recbase'>
          <h1>
            KPTC-Drive-3-1
          </h1>
        </div>

        <h2 >
          Над проектом работали
        </h2>


        <div id="content">
          <div>
            <div><RectangleWithHuman /> <label class = 'label'>gigilya</label></div>
            <div><RectangleWithHuman /> <label class = 'label'>gigilya</label></div>
            <div><RectangleWithHuman /> <label class = 'label'>gigilya</label></div>
          </div>
          <div>
            <div><RectangleWithHuman /><label class = 'label'>gigilya</label></div>
            <div><RectangleWithHuman /><label class = 'label'>gigilya</label></div>
            <div><RectangleWithHuman /><label class = 'label'>gigilya</label></div>
          </div>
          <div>
            <div><RectangleWithHuman /><label class = 'label'>gigilya</label></div>
            <div><RectangleWithHuman /><label class = 'label'>gigilya</label></div>
            <div><RectangleWithHuman /><label class = 'label'>gigilya</label></div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Mainpage;
