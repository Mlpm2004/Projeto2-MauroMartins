import React from "react";
import {Externo,Selectformat,SelectDescription} from './style'
function Select({label, options, description,...otherProps}){
    // Componente select, label integrado e muda borda quando focado. Recebe um array pata montar as options
    return (
        <Externo>
            <SelectDescription>{label}</SelectDescription>
            <Selectformat   {...otherProps}>
               <option disabled value="" selected>{description} </option>
               {options.map(option => <option
                key={option.valor}
                value={option.valor}>
                {option.texto}
                </option>
                )}                
            </Selectformat>
            
        </Externo>
    );
}
export default Select;