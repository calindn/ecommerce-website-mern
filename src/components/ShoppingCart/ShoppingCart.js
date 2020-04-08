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
            <div className='prodcuts-table'>
                <table>
                    <tr>
                        <th>

                        </th>
                        <th>
                            <span>Name</span>
                        </th>
                        <th>
                            <span>Price</span>
                        </th>
                        <th>
                            <span>Quantity</span>
                        </th>
                        <th>

                        </th>
                        <th>
                            <span>Total Price</span>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <img src='https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' />
                        </td>
                        <td>
                            <span className='name-val'>
                                Silicone Case for iPad mini
                            </span>
                        </td>
                        <td>
                            <span className='price-val'>
                                $45.00
                            </span>
                        </td>
                        <td>
                            <span className='quantity-val'>
                                <input type='number' min='1' />
                            </span>
                        </td>
                        <td>
                            <span className='remove-btn'>
                                REMOVE
                            </span>
                        </td>
                        <td>
                            <span className='total-price-val'>
                                $45.00
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className='checkout-wrapper'>
                <div className='subtotal'>
                    Subtotal: <span className='subtotal-val'>$101.00</span>
                </div>
                <div className='total'>
                    Total: <span className='total-val'>$101.00</span>
                </div>
                <div className='control-btns-wrapper'>
                    <div>
                        <button className='back-ts'>BACK TO SHOP</button>
                    </div>
                    <div>
                        <button className='checkout-btn'>CHECKOUT</button>
                    </div>
                </div>
            </div>
            <div className='discount-code-wrapper'>
                <button className='dc-btn'>DISCOUNT CODE</button>
                <div className='to-be-shown-on-click'>
                    <input type='text' placeholder='YOURPROMOCODE' />
                    <button>APPLY</button>
                </div>
            </div>
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
