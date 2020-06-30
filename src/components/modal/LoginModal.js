/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import AuthContext from './../../context/auth-context';
import './styles.css';

const LoginModal = () => {
    const [show, setShow] = useState(false);
    const [isLoggedIn, setIsLoggedIn ] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const emailEl = useRef();
    const passwordEl = useRef();

    const context = useContext(AuthContext);

    const switchModeHandler = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    const submitHandler = event => {
        event.preventDefault();
        const email = emailEl.current.value;
        const password = passwordEl.current.value;

        if(email.trim().length === 0 || password.trim().length === 0) {
             return;
        }

        let requestBody = {
            query: `
                query {
                    login(email: "${email}", password: "${password}") {
                        userId
                        token
                        tokenExpiration
                    }
                }
            `
        };

        if (!isLoggedIn) {
            requestBody = {
                query: `
                    mutation {
                        createUser(userInput: {email: "${email}", password: "${password}"}) {
                            _id
                            email
                        }
                    }
                `
            }
        }

    fetch('https://reactvault-api.herokuapp.com/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(res => {
            if (res.status !== 200 && res.status !== 201) {
            throw new Error('Failed!');
            }
            return res.json();
        })
        .then(resData => {
            if(resData.data.login.token) {
                context.login(
                    resData.data.login.token, 
                    resData.data.login.userId, 
                    resData.data.login.tokenExpiration
                );
            }
            console.log(resData);
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <main>
            <a href='#' onClick={handleShow}>Login</a>

            <Modal className='modal' show={show} onHide={handleClose}>
                <Modal.Header>
                <Modal.Title>{isLoggedIn ? 'Login' : 'Sorry, but the sign up is invite-only at the moment.'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitHandler}>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={emailEl} disabled={!isLoggedIn ? true : false}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={passwordEl} disabled={!isLoggedIn ? true : false}/>
                    </Form.Group>
                    {!isLoggedIn && <Form.Group controlId="formGroupPassword">
                        <Form.Label>Repeat Password</Form.Label>
                        <Form.Control type="password" placeholder="Repeat Password" disabled={!isLoggedIn ? true : false}/>
                    </Form.Group>}
                    <Button type='submit' className='confirm' variant="primary" >{isLoggedIn ? 'Login' : 'Sign Up'}</Button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
                {isLoggedIn &&<p>Don't have an account? <Button size='sm' variant='outline-dark' onClick={switchModeHandler}>Sign up!</Button></p>}
                {!isLoggedIn && <p>Have an account? <Button size='sm' variant='outline-dark' onClick={switchModeHandler}>Login!</Button></p>}
            </Modal>
        </main>
    )
}

export default LoginModal; 