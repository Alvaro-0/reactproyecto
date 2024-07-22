import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <div className="nav-bar">
            <ul className="nav-items">
                <li className="item-nav">
                    <Link to="/">
                        
                    </Link>
                </li>
                <li className="item-nav">
                    <Link to="/">
                        <a className="item-text">Inicio</a>
                    </Link>
                </li>

                <li className="item-nav">
                    <Link to="/productos">
                        <a className="item-text">Productos</a>
                    </Link>
                </li>
                <li className="item-nav">
                    <Link to="/contacto">
                        <a className="item-text">Contacto</a>
                    </Link>
                </li>
                <li className="item-nav">
                    <Link to="/cart">
                        <CartWidget />
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;