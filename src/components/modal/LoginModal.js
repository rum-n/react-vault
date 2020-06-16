import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import SignupModal from './SignupModal';
import './styles.css';

const LoginModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <a href='#' onClick={handleShow}>Login</a>

            <Modal className='modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>Login</Button>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
                <p>Don't have an account? <SignupModal/></p>
            </Modal>
        </div>
    )
}

export default LoginModal; 