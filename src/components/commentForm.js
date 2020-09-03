import React from 'react';
import { Form, Button } from 'react-bootstrap'

class CommentForm extends React.Component {
    state = {
        text: '',
    }

    handleChange = (e) => {
        let key = e.target.name;
        let value = e.target.value
        e.persist()
        this.setState({
            [key]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let comment = {text: this.state.text, user_id: sessionStorage.getItem('user'), fixture_id: this.props.fixture.id}
        this.props.addNewComment(comment)
        this.props.history.push(`/fixtures/${this.props.fixture.id}`)
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

export default CommentForm;