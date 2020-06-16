import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles.css';
import LoginModal from '../modal/LoginModal';
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
                    <li><NavLink to='/categories'>Browse by topic</NavLink>
                    </li>
                    <li><NavLink to='/add-resource'>Add a resource</NavLink></li>
                    <li><LoginModal/></li>
                </ul>
            </nav>         
        </header>
    )
}

export default Navigation; 