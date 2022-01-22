import React from "react";
import {Externo,Inputformat,InputDescription} from './style'
function Input({label, ...otherProps}){
    return (
        <Externo>
            <InputDescription>{label}</InputDescription>
            <Inputformat
                {...otherProps}
            />
            
        </Externo>
    );
}
export default Input;