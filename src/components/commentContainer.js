import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Comment from './comment';
import CommentForm from './commentForm';

function CommentContainer (props) {
    let comments = props.comments
    console.log(comments)
    return (
        <Container>
            <Row>
                <Col>
                    {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
                </Col>
                <Col>
                    <CommentForm fixture={props.fixture} />
                </Col>
            </Row>
        </Container>
    )
}

export default CommentContainer;