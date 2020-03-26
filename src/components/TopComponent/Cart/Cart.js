import React from 'react'
import './Cart.css'

export default function Cart() {
    return (
        <div className='cart-container'>
            <i class="fas fa-shopping-cart"></i>
            <span className='num-items-incart'>0</span>
        </div>
    )
}
