import React from 'react'
import './styles.css'

const Comment = (data) => {
    const { username, comment } = data;
    return (
        <div className='comment-box'>
            <p>{comment}</p>
            <h6>-{username}</h6>
        </div>
    )
}

export default Comment