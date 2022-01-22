import React from "react";
import {Externo,TextAreaformat,TextAreaDescription} from './style'
function TextArea({label, ...otherProps}){
    return (
        <Externo>
            <TextAreaDescription>{label}</TextAreaDescription>
            <TextAreaformat
                {...otherProps}
            />
            
        </Externo>
    );
}
export default TextArea;