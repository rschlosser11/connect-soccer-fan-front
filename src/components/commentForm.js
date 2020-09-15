import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { newComment } from '../actions/manageFetch';
import { connect } from 'react-redux';

class CommentForm extends React.Component {
    state = {
        text: '',
    }

    handleChange = (e) => {
        let value = e.target.value
        this.setState({
            text: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let comment = {text: this.state.text, user_id: sessionStorage.getItem('user'), fixture_id: this.props.fixture.id}
        this.props.addNewComment(comment)
        this.setState({
            text: ''
        })
    }

    render () {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId='formBasicText'>
                    <Form.Control 
                        as='textarea'
                        name='text' 
                        rows='3'
                        type='textarea' 
                        placeholder='Enter comment'
                        value={this.state.text}  
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Button variant='primary' type='submit' data-fixture-id={this.props.fixture}>
                    Post
                </Button>
            </Form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewComment: (comm) => dispatch(newComment(comm)),
    }
}

export default connect(null, mapDispatchToProps)(CommentForm);