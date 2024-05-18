import React from 'react'

export const Comment = ({ id, text }) => {
    return (
        <>
            <div>{id}</div>
            <div>{text}</div>
        </>
    )
}
