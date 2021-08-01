import React from 'react';

import Stepper from '../../shared/Stepper';
import GirlImage from "../../assets/images/img_girl.jpg";
import DemoPage1 from '../../views/DemoPage1';
import DemoPage2 from '../../views/DemoPage2';

function App() {


    return (
        <Stepper 
            imageToShow={GirlImage}
            principalTitle="Venham onferir oq há de novo nos prodovo nos prodovo nos prod ovo nos produtos"
            principalSubTitle="Venham onferir oq há de novo nos produtos  há de novo nos produtos  há de novo nos produtos  há de novo nos produtos  há de novo nos produtos  há de novo nos produtos há de novo nos produtos"
            progressTitle="Sobre o imóvel"
            steps={[
                {
                    element: <DemoPage1 />,
                    stepTitle: "Minha demonstração de Steps",
                    stepSubTitle: "Conferindo a demonstração do Subtitulo do Step. O importante é ocorrer a mudança"
                }
            ]}
        />
    );
}

export default App;
