import React from 'react';
import { Toast } from 'react-bootstrap'
import moment from 'moment';

function Comment (props) {
    let date = moment(props.comment.created_at)
    return (
        <Toast>
            <Toast.Header>
                <strong className='mr-auto'>{props.comment.user.username}</strong>
                <small>{`${date.format('MMM')} ${date.get('date')} ${date.format('h:mm A')}`}</small>
            </Toast.Header>
            <Toast.Body>{props.comment.text}</Toast.Body>
        </Toast>
    )
}
export default Comment