import React from "react";
import Switch from "react-switch";
import {Externo,Switchdiv,SwitchDescription} from './style'
function SwitchComponent({label, ...otherProps}){
return (
      <Externo>
            <Switchdiv>
                <SwitchDescription>{label}</SwitchDescription>
            </Switchdiv>
            <Switchdiv>
                <Switch   {...otherProps}/>
            </Switchdiv>
      </Externo>
    );
}
export default SwitchComponent;