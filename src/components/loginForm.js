import React from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
        displayAlert: false
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
        this.props.handleLogin({email: this.state.email, password: this.state.password})
        if (this.props.user) {
            this.props.history.push('/')
            this.setState({
                email: '',
                password: '',
                displayAlert: false
            })
        } else {
            this.setState({displayAlert: true})
        }
    }

    render() {
        return (
            <Container>
                {this.state.displayAlert ? <Alert variant='danger'>Incorrect email or password</Alert> : ''}
                <h3>Login</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            required
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
                            required
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