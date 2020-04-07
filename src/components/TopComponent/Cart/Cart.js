import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'

export default function Cart() {
    return (
        <Link to='/cart'>
            <div className='cart-container'>
                <i class="fas fa-shopping-cart"></i>
                <span className='num-items-incart'>0</span>
            </div>
        </Link>
    )
}
