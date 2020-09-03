import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class LoginForm extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
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
        console.log(this.state)
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId='exampleForm.ControlText'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            name='username' 
                            type='text' 
                            placeholder='Enter Username'
                            value={this.state.username} 
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            name='email' 
                            type='email' 
                            placeholder='Enter email'
                            value={this.state.email}  
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            name='password' 
                            type='password' 
                            placeholder='Enter password'
                            value={this.state.password}  
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default LoginForm;