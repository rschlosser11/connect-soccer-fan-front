import React from 'react';
import { Form, Button } from 'react-bootstrap'

class CommentForm extends React.Component {
    state = {
        text: '',
        fixture_id: null
    }

    handleChange = (e) => {
        let key = e.target.name;
        let value = e.target.value
        e.persist()
        this.setState({
            [key]: value
        })
    }

    render () {
        console.log('commentform', this.props.fixture)
        return (
            <Form>
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