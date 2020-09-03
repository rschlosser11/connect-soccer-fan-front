import React from 'react';
import { Toast } from 'react-bootstrap'

function Comment (props) {
    return (
        <Toast>
            <Toast.Header>
                <strong className='mr-auto'>{props.comment.user.username}</strong>
                <small>{props.comment.created_at}</small>
            </Toast.Header>
            <Toast.Body>{props.comment.text}</Toast.Body>
        </Toast>
    )
}
export default Comment