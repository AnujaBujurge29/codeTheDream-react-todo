// import React from 'react'

import { useEffect, useRef } from "react"

export default function InputWithLabel({
    id, value, onInputChange, children }) {

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
