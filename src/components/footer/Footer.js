import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../img/logo2.png';

const Footer = () => {
    return (
        <footer>
            <p>© 2020 React Vault. All rights reserved.</p>
            <p className='credits'>Created with <img src={logo} alt='React Logo'/> by <a href='https://rmanev.com'>Rumen Manev</a></p>
        </footer>
    )
}

export default Footer; 