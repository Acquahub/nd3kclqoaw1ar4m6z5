import React from 'react';
import styles from './login1.module.css';
import TextInput from '../components/customCode/textInput.jsx';
import SimpleButton from '../components/customCode/simpleButton.jsx';
import DefaultButton from '../components/customCode/defaultButton.jsx';



function Login1(props) {
    
    

    return(
        
<div id="login1-1-9b0edc8f79d047b3a4e6b2e2bf571b27" className={styles["login1-1-9b0edc8f79d047b3a4e6b2e2bf571b27"]} >
<div id="layer-1-8b7046a343474cffb045e4eeb5420065" className={styles["layer-1-8b7046a343474cffb045e4eeb5420065"]} >
<div id="text-1-ac4432b9ec0447d2b0d09655710c8745" className={styles["text-1-ac4432b9ec0447d2b0d09655710c8745"]} >¡Hola! Ingresa tu teléfono, e-mail o usuario</div>
<div id="layer-9-67a11b3147884b28800bac0a89d989ad" className={styles["layer-9-67a11b3147884b28800bac0a89d989ad"]} ></div>
<div id="layer-6-95bf4fca0030475cbc0d6e00c7aa9d41" className={styles["layer-6-95bf4fca0030475cbc0d6e00c7aa9d41"]} >
<div id="text-2-1795e4d4afde45eb8d0ea8ab7cd3c978" className={styles["text-2-1795e4d4afde45eb8d0ea8ab7cd3c978"]} >Teléfono, correo o usuario</div>
<TextInput  props={ props.componentStyles ? props.componentStyles['textinput-1']:''} onClick={() => openInNewTab(props.url_textinput1)} />
</div>
<div id="layer-3-0c5094db54dd49ba9d07f518de3c3497" className={styles["layer-3-0c5094db54dd49ba9d07f518de3c3497"]} >
<SimpleButton  props={ props.componentStyles ? props.componentStyles['simplebutton-1']:''} onClick={() => openInNewTab(props.url_simplebutton1)} />
<DefaultButton  props={ props.componentStyles ? props.componentStyles['defaultbutton-1']:''} onClick={() => openInNewTab(props.url_defaultbutton1)} />
</div>
</div>
</div>
    );
}

export default Login1;