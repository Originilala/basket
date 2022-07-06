import React from "react";
import './Field.css';

function Field({idField, names, children, handleChanges}) {
    return(
        <label htmlFor="name-field">{children}
            <input
                type="text"
                name={names}
                id={idField}
                onChange={handleChanges}
            />
        </label>
    )
}

export default Field;