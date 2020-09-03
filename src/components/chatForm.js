import React from 'react';
import { Form, Button } from 'react-bootstrap'

class ChatForm extends React.Component {
    state = {
        text: '',
        fixture_id: this.props.fixture.id,
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
                <Button variant='primary' type='submit'>
                    Post
                </Button>
            </Form>
        )
    }
}

export default ChatForm;