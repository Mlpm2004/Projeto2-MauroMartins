import React from "react";
import {Externo,Buttonformat,ButtonDescription} from './style'
function Button({ ...otherProps}){
    return (
        <Externo>
            <Buttonformat  {...otherProps}/>
        </Externo>
    );
}
export default Button;