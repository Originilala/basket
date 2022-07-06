import React from "react";

function Tile({children, nameN, functionP}) {
    return (
        <button
            type="button"
            className={nameN}
            onClick={functionP}
        >
            {children}
        </button>
    )
}

export default Tile;