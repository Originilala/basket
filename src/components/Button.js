import React from "react";
import './Button.css';

function Button({children, functiontype, types, ids}) {
    return(
        <button
            // className="button-style"
            id={ids}
            type={types}
            onClick={functiontype}
        >
            {children}
        </button>
    )
}

export default Button;