// import React from 'react'

import { useEffect, useRef } from "react"
import PropTypes from "prop-types";

export default function InputWithLabel({ id, value, onInputChange, children }) {
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus();
    })
    return (
        <>
            <label htmlFor={id} className="form-label">
                {children}
            </label>
            <input
                id={id}
                type='text'
                className="form-control"
                value={value}
                onChange={onInputChange}
                ref={inputRef}

            />
        </>
    )
}
InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
};