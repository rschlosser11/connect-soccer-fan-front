import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
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
        this.props.handleSignUp(this.state)
    }

    render() {
        return (
            <Container>
                <h3>Register to Connect</h3>
                <p>Already registered? <Link to='/login'>Login</Link></p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId='formBasicText'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            required
                            name='username' 
                            type='text' 
                            placeholder='Enter username'
                            value={this.state.username}  
                            onChange={this.handleChange}
                        />
                    </Form.Group>
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
                        Register
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default SignUpForm;