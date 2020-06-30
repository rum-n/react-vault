/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './styles.css';
import AuthContext from '../../context/auth-context';

const AddResourceModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const context = AuthContext;

    const titleEl = useRef();
    const subtitleEl = useRef();
    const textEl = useRef();
    const linkEl = useRef();
    const tagsEl = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const title = titleEl.current.value;
        const subtitle = subtitleEl.current.value;
        const text = textEl.current.value;
        const link = linkEl.current.value;
        const tags = tagsEl.current.value;

        if (
            title.trim().length === 0 || 
            subtitle.trim().length === 0 ||
            text.trim().length === 0 ||
            link.trim().length === 0 ||
            tags.trim().length === 0
            ){
                return;
        }

        const resource = { title, subtitle, text, link, tags };
        console.log(resource);

        const requestBody = {
                query: `
                    mutation {
                        createResource(resourceInput: {title: "${title}", subtitle: "${subtitle}", text: "${text}", link: "${link}", tags: "${tags}"}) {
                            _id
                            title
                            subtitle
                            text
                            link
                            tags
                        }
                    }
                `
            }
    
    const token = context.token;

    fetch('https://reactvault-api.herokuapp.com/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
        .then(res => {
            if (res.status !== 200 && res.status !== 201) {
            throw new Error('Failed!');
            }
            return res.json();
        })
        // .then(resData => {
        //       const updatedResources = [];
        //       updatedResources.push({
        //         _id: resData.data.createResource._id,
        //         title: resData.data.createResource.title,
        //         subtitle: resData.data.createResource.subtitle,
        //         text: resData.data.createResource.text,
        //         link: resData.data.createResource.link,
        //         tags: resData.data.createResource.tags
        //       });
        //       return { resources: updatedResources };
        //   })
          .catch(err => {
            console.log(err);
          });
    };

    return (
        <main>
            <a href='#' onClick={handleShow}>Add a resource</a>

            <Modal className='modal' show={show} onHide={handleClose}>
                <Modal.Header>
                <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitHandler}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title" maxLength='40'ref={titleEl}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="Author" maxLength='20' ref={subtitleEl}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Summary</Form.Label>
                        <Form.Control type="text" placeholder="Summary (max. 80 characters)" as='textarea' maxLength="80" ref={textEl}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Link</Form.Label>
                        <Form.Control type="text" placeholder="Link" ref={linkEl}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tags (separate by commas)</Form.Label>
                        <Form.Control type="text" placeholder="Tags" ref={tagsEl}/>
                    </Form.Group>
                    <Button type='submit' className='confirm' variant="primary" >Submit</Button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </main>
    );
}

export default AddResourceModal; 