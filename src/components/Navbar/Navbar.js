import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <ul>
                <Link to='/mac'>
                    <li>
                        MAC
                </li>
                </Link>
                <li>
                    LAPTOPS
                </li>
                <li>
                    DESKTOP PCS
                </li>
                <li>
                    PRINTERS
                </li>
                <li>
                    SMART TECH
                </li>
                <li>
                    NETWORKING
                </li>
                <li>
                    TABLETS
                </li>
            </ul>
        </div>
    )
}
