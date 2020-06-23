import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles.css';
import LoginModal from '../modal/LoginModal';
import AddResourceModal from '../modal/AddResourceModal';
import logo from '../../img/logo.png';
import AuthContext from './../../context/auth-context';

const Navigation = () => {

    return (
        <AuthContext.Consumer>
        {(context) => {
        return (<header>
            <Link to='/'>
                <div className='logo'>
                    <img src={logo} alt='Logo'/>
                </div>
            </Link>
            <nav>
                <ul className='menu'>
                    <li><NavLink to='/categories'>Browse by topic</NavLink></li>
                    {context.token && <li><AddResourceModal/></li>}
                    {!context.token && <li><LoginModal/></li>}
                    {context.token && <li onClick={context.logout}>Logout</li>}
                </ul>
            </nav>         
        </header>)}}
        </AuthContext.Consumer>
    )
};

export default Navigation; 