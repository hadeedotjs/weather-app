import React from "react"; 

export function Button (props) {
    return (
        <button onClick={props.onClick} className="btn"> {props.value}</button>
    )
}