import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <ul>
                <Link style={linkStyles} to={{ pathname: '/shop/Mac' }}>
                    <li>
                        MAC
                    </li>
                </Link>
                <Link style={linkStyles} to={{ pathname: '/shop/Laptops' }}>
                    <li>
                        LAPTOPS
                </li>
                </Link>

                <Link style={linkStyles} to={{ pathname: '/shop/Desktop_PCs' }}>
                    <li>
                        DESKTOP PCS
                </li>
                </Link>

                <Link style={linkStyles} to={{ pathname: '/shop/Printers' }}>
                    <li>
                        PRINTERS
                    </li>
                </Link>

                <Link style={linkStyles} to={{ pathname: '/shop/Smart_Tech' }}>
                    <li>
                        SMART TECH
                </li>
                </Link>

                <Link style={linkStyles} to={{ pathname: '/shop/Networking' }}>
                    <li>
                        NETWORKING
                    </li>
                </Link>

                <Link style={linkStyles} to={{ pathname: '/shop/Tablets' }}>
                    <li>
                        TABLETS
                    </li>
                </Link>

            </ul>
        </div>
    )
}

const linkStyles = {
    'textDecoration': 'none',
    'color': '#ffffff'
}
