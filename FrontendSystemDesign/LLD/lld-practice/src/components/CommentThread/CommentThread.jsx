import React from 'react'
import { Comment } from './Comment'
import './styles.css'

export const CommentThread = ({ comments }) => {
    return (
        <div className='comment-main'>
            {comments.map((comment, idx) => {
                return (
                    <React.Fragment key={`${comment.text}-${idx}`}>
                        <Comment id={comment.id} text={comment.text} />
                        {comment.replies && <CommentThread comments={comment.replies} />}
                    </React.Fragment>
                )
            })}
        </div>
    )
}
