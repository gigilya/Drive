import React from 'react';
import './mainPage.css';
import RectangleWithHuman from '../../components/buttons/RectangleWithHuman';
import ButtonAuthorization from '../../components/buttons/ButtonAutorization';

function Mainpage() {
  return (
    <div className="Mainpage">
      <body>
        <div class = "signin"><ButtonAuthorization/></div>
        <div class='recbase'>
          <h1>
            KPTC-Drive-3-1
          </h1>
        </div>

        <h2 >
          Над проектом работали
        </h2>


        <div class="content">
          <div>
            <div><RectangleWithHuman /> <label class = 'label'>sdfghj</label></div>
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
