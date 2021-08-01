import React from 'react';

import Stepper from '../../shared/Stepper';
import GirlImage from "../../assets/images/img_girl.jpg";

function App() {


    return (
        <Stepper 
            imageToShow={GirlImage}
            principalTitle="Venham onferir oq há de novo nos prodovo nos prodovo nos prod ovo nos produtos"
            principalSubTitle="Venham onferir oq há de novo nos produtos  há de novo nos produtos  há de novo nos produtos  há de novo nos produtos  há de novo nos produtos  há de novo nos produtos há de novo nos produtos"
            progressTitle="Sobre o imóvel"
        />
    );
}

export default App;
