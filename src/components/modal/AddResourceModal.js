import React, { useState, useRef, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import AuthContext from './../../context/auth-context';
import './styles.css';

const AddResourceModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <main>
            <a href='#' onClick={handleShow}>Add a resource</a>

            <Modal className='modal' show={show} onHide={handleClose}>
                <Modal.Header>
                <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Repeat Password</Form.Label>
                        <Form.Control type="password" placeholder="Repeat Password"/>
                    </Form.Group>
                    <Button type='submit' className='confirm' variant="primary" ></Button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </main>
    );
}

export default AddResourceModal; 