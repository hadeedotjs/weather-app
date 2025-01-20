import React from "react";

export function Input(props){
    return (
        
            <input className="input" placeholder={props.placeholder} value={props.value} onChange={props.onChange}></input>
        
    )
}