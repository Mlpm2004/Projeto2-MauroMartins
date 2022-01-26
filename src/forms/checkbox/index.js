import React from "react";
import {Externo,Checkformat,CheckDescription} from './style'
function Check({label, ...otherProps}){
    // Componente checkbox
    return (
        <Externo>
            <Checkformat {...otherProps}/>
            <CheckDescription>{label}</CheckDescription> 
        </Externo>
    );
}
export default Check;