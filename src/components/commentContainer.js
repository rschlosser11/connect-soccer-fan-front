import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Comment from './comment';
import CommentForm from './commentForm';
import SignUpForm from './signUpForm';

function CommentContainer (props) {
    let comments = props.comments
    return (
        <Container>
            <Row>
                <Col>
                    {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
                </Col>
                <Col>
                    {sessionStorage.getItem('user') ? <CommentForm fixture={props.fixture} addNewComment={props.addNewComment} /> : <SignUpForm />}
                </Col>
            </Row>
        </Container>
    )
}

export default CommentContainer;