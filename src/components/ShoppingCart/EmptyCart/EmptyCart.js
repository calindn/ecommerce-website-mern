import React from 'react'
import './EmptyCart.css'

export default function EmptyCart() {
    return (
        <div className='empty-cart-container'>
            <div className='empty-c-heading'>
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
