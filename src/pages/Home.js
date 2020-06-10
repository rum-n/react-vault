import React from 'react';
import Resource from '../components/resourceCard/Resource';
import './styles.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const Home = () => {

    return (
        <Container>
            <div className='main-content'>
                <h1 className='title'>Find curated resources <br/>to build everything you need with React</h1>
            </div>
            <Form style={{ marginBottom: '3rem' }}>
                <FormControl 
                    type="text" 
                    placeholder="Search" 
                    className="mr-sm-2" />
            </Form>
            <div className='resource-list'>
                <Resource/>
            </div>
      </Container>
    );
}

export default Home; 