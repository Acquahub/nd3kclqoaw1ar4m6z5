import React from 'react';
import { Link } from 'react-router-dom';
import styles from './screen1.module.css';
import TextInput from '../components/customCode/textInput.jsx';
import SimpleButton from '../components/customCode/simpleButton.jsx';
import DefaultButton from '../components/customCode/defaultButton.jsx';



function Screen1() {
    

    return(
        <div className={styles["Screen1"]}>
            
<div id="fullloginlandingpage-1-55e0ebb2b03c4056bf4e90367701a05e" className={styles["fullloginlandingpage-1-55e0ebb2b03c4056bf4e90367701a05e"]} >
<div id="header-1c7005bd34034cd3b482562d5b98ad41" className={styles["header-1c7005bd34034cd3b482562d5b98ad41"]} >
<div id="marca-7583acce60054895af56740496c97c1c" className={styles["marca-7583acce60054895af56740496c97c1c"]} >
<div id="text-1-8256c871e24043efa556c2bb3a2beb90" className={styles["text-1-8256c871e24043efa556c2bb3a2beb90"]} >ElCarro</div>
</div>
<Link to="/Screen2" className={styles["ingresar-f75537e1c1b34497b78b17e1c2bc3e5d"]}><div id="ingresar-f75537e1c1b34497b78b17e1c2bc3e5d" className={styles["ingresar-f75537e1c1b34497b78b17e1c2bc3e5d"]} >
<div id="simplebutton-1-605d07de36af4fc6b1a73d9067830af0" className={styles["simplebutton-1-605d07de36af4fc6b1a73d9067830af0"]} >
<div id="text-1-e50d2e98d6324a13b9b27a5537e26fa3" className={styles["text-1-e50d2e98d6324a13b9b27a5537e26fa3"]} >Click me!</div>
</div>
</div></Link>
</div>
<div id="layer-18-d4108a0ff72240129805f4dbe5523af2" className={styles["layer-18-d4108a0ff72240129805f4dbe5523af2"]} >
<div id="login1-1-6a3eb9a861ff42689e962e3a4d97329d" className={styles["login1-1-6a3eb9a861ff42689e962e3a4d97329d"]} >
<div id="layer-1-08b90e96a1414a5cbe25b819ee01ce1e" className={styles["layer-1-08b90e96a1414a5cbe25b819ee01ce1e"]} >
<div id="text-1-61ca346e1b414714928a43122dbc6181" className={styles["text-1-61ca346e1b414714928a43122dbc6181"]} >¡Hola! Ingresa tu teléfono, e-mail o usuario</div>
<div id="layer-9-b21fac611f2e4e2caa80134ad61502ca" className={styles["layer-9-b21fac611f2e4e2caa80134ad61502ca"]} ></div>
<div id="layer-6-99ab03f488c04720bf7ea8feb4fe388c" className={styles["layer-6-99ab03f488c04720bf7ea8feb4fe388c"]} >
<div id="text-2-791cedcd115e40428e620bd48a461f4e" className={styles["text-2-791cedcd115e40428e620bd48a461f4e"]} >Teléfono, correo o usuario</div>
<TextInput   />
</div>
<Link to="/Screen2" className={styles["layer-3-070167b89b3f48b2a47d137980d8a1b3"]}><div id="layer-3-070167b89b3f48b2a47d137980d8a1b3" className={styles["layer-3-070167b89b3f48b2a47d137980d8a1b3"]} >
<SimpleButton   />
<DefaultButton   />
</div></Link>
</div>
</div>
</div>
</div>
        </div>
    );
}

export default Screen1;
            