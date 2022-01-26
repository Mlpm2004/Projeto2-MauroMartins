import React from "react";
import {Externo,Buttonformat} from './style'
function Button({ ...otherProps}){
    //Componente de Botão, opçoes de colorBackground, colorText e width podem ser passados via props
    return (
        <Externo>
            <Buttonformat  {...otherProps}/>
        </Externo>
    );
}
export default Button;