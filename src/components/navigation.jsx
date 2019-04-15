import React from 'react';

import { NavLink ,Link} from 'react-router-dom';

const Navbar = () => {
    return (

        <nav className="grey darken-3">
            <div className="container">
            <div className="nav-wrapper ">
                <Link to="/" className="brand-logo">Admin CRM</Link>
                <ul className="right">
                    <li><NavLink activeClassName="activeLink" exact to='/'>Image Galary</NavLink></li>
                    <li><NavLink activeClassName="activeLink" exact to='/uploadfile'>Upload Images</NavLink></li>
                    <li><NavLink to='/'>Log Out</NavLink></li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;