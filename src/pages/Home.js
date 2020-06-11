import React from 'react';
import Resource from '../components/resourceCard/Resource';
import './styles.css';

import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'

const Home = () => {

    return (
        <Container>
            <div className='main-content'>
                <h1 className='title'>Find curated resources <br/>to build everything you need with React</h1>
            </div>
            <Resource/>
      </Container>
    );
}

export default Home; 