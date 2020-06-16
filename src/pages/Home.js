import React from 'react';
import Resource from '../components/resourceCard/Resource';
import './styles.css';
import MainImg from './../img/sitonreact.svg';
import HeaderImg from './../img/webdev.svg';

import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'

const Home = () => {

    return (
        <Container>
            <div className='main-content'>
                <h1 className='title'>Find curated resources <br/>to build everything you need with React</h1>
                <img className='header-img' src={HeaderImg} alt='Web Research'/>
            </div>
            <Resource/>
            <div className='main-content'>
                <img className='header-img' src={MainImg} alt='React Logo'/>
            </div>
      </Container>
    );
}

export default Home; 