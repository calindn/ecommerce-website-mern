import React from 'react'
import { Link } from 'react-router-dom'
import './ShoppingCart.css'

import FooterComponent from '../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../LandingPage/CopyrightComponent/CopyrightComponent'

export default function ShoppingCart() {
    return (
        <div className='shopping-cart-container'>
            <div className='shop-c-heading'>
                SHOPPING CART
            </div>
            <div className='empty-cart-heading'>
                Your shopping cart is empty
            </div>
            <Link to='/'>
                <button>CONTINUE SHOPPING</button>
            </Link>
            <div className='cart-footer-copyright'>
                <div>
                    <FooterComponent />
                </div>
                <div>
                    <CopyrightComponent />
                </div>
            </div>
        </div>
    )
}
