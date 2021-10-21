import React from 'react'
import './header.css'
import Logo from '../../assets/images/logo.png'
import MenuPopupState from '../side-bar/menu'
import {Link} from 'react-router-dom'
const Header = () => {
    return(
        <div className='header'>
            <div className='headre-item'>
            <Link to='Main'><img alt='log' src={Logo}></img></Link>
        </div>
        <MenuPopupState/>
        </div>
        
    )
}
export default Header