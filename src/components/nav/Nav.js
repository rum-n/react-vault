import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles.css';
import logo from '../../img/logo.png';

const Navigation = () => {
    return (
        <header>
            <Link to='/'>
                <div className='logo'>
                    <img src={logo} alt='Logo'/>
                </div>
            </Link>
            <nav>
                <ul className='menu'>
                    <li><NavLink to='/categories'>Browse by category</NavLink></li>
                    <li><NavLink to='/add-resource'>Add a resource</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                </ul>
            </nav>         
        </header>
    )
}

export default Navigation; 