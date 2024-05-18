import React from 'react'
import Comment from './Comment';
import './styles.css'

const Nested = ({ data }) => {
    return (
        <div className='nested-container'>
            {data.map(({ username, comment, replies = [] }, idx) => {
                return (
                    <div key={idx}>
                        <Comment username={username} comment={comment} key={idx+'main'} />
                        {replies && <Nested data={replies} key={idx+'nested'} />}
                    </div>
                )
            })}

        </div>
    )
}

export default Nested