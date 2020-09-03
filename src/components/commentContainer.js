import React from 'react';
import { Container } from 'react-bootstrap'

function CommentContainer (props) {
    
    console.log(props)
    let comments = props.comments
    console.log(comments)
    return (
        <Container>
            {comments.map(comment => console.log(comment))}
        </Container>
    )
}

export default CommentContainer;