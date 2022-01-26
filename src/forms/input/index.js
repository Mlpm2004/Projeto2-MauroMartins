import React from "react";
import {Externo,Inputformat,InputDescription} from './style'
function Input({label, ...otherProps}){
    // Componente Input com o label integrado, muda borda quando focado
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