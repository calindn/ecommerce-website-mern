import React from 'react'
import { Link } from 'react-router-dom'
import './UserAuth.css'

export default function UserAuth() {
    return (
        <Link to='/authorization'>
            <div className='userauth-container'>
                <i class="fas fa-user"></i>
            </div>
        </Link>

    )
}
