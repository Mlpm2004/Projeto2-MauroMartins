import React from "react";
import {Externo,Radioformat,RadioDescription} from './style'
function Radio({label, ...otherProps}){
    return (
        <Externo>
            <Radioformat {...otherProps}/>
            <RadioDescription>{label}</RadioDescription> 
        </Externo>
    );
}
export default Radio;