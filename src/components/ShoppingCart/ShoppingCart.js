import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import './ShoppingCart.css'

import FooterComponent from '../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../LandingPage/CopyrightComponent/CopyrightComponent'
import EmptyCart from './EmptyCart/EmptyCart'


export default function ShoppingCart({ match, location }) {


    const itemCart = location.itemCart;
    console.log('brandName ', itemCart);

    let inCart = JSON.parse(localStorage.getItem('inCart') || "[]");

    const originalCartProducts = inCart;
    // const originalCartProducts = [{
    //     img: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    //     name: 'Silicone Case for iPad mini',
    //     price: 454.00,
    //     quantity: 1,
    //     totalPrice: 45
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    //     name: 'Silicone Case for iPad mini',
    //     price: 45.00,
    //     quantity: 1,
    //     totalPrice: 45
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    //     name: 'Silicone Case for iPad mini',
    //     price: 45.00,
    //     quantity: 1,
    //     totalPrice: 45
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    //     name: 'Silicone Case for iPad mini',
    //     price: 45.00,
    //     quantity: 1,
    //     totalPrice: 45
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    //     name: 'Silicone Case for iPad mini',
    //     price: 45.00,
    //     quantity: 1,
    //     totalPrice: 45
    // }
    // ]
    // const cartProducts = [...originalCartProducts];

    let sum = 0;
    originalCartProducts.forEach(item => sum += item.price)

    const [cartProducts, setCart] = useState(originalCartProducts);
    const [subtotal, setSubTotal] = useState(sum);
    const [total, setTotal] = useState(sum);
    const [placeholderValue, setPlaceholderValue] = useState('');



    const handleDiscountBtnClick = () => {
        let elem = document.querySelector('.to-be-shown-on-click');

        if (elem.style.height != '16vh')
            elem.style.height = '16vh'
        else
            elem.style.height = '0vh'
    }

    const removeFromCart = (idx) => {

        let inCartOld = JSON.parse(localStorage.getItem('inCart'));
        let newCart = inCartOld.filter(item => item.img != cartProducts[idx].img);

        localStorage.setItem('inCart', JSON.stringify(newCart))

        const tp = cartProducts[idx].totalPrice;

        setSubTotal(subtotal - tp);
        setTotal(total - tp)
        setCart(cartProducts.filter((item, i) => i !== idx))

        document.querySelector('#weirdSpan').innerHTML = newCart.length;
    }
    const changeQuantity = (e, idx) => {
        console.log(e.target.value);
        setPlaceholderValue('' + e.target.value);
        console.log('index', idx);
        const product = cartProducts[idx];
        const price = product.price;
        const newTotal = price * parseInt(e.target.value);

        let nst, nt; // new subtotal, total
        if (newTotal < product.totalPrice) {
            nst = subtotal - price;
            nt = total - price
        } else if (newTotal > product.totalPrice) {
            nst = subtotal + price;
            nt = total + price;
        }


        cartProducts[idx].totalPrice = newTotal;
        const ncp = [...cartProducts]
        setCart(ncp);

        setSubTotal(nst);
        setTotal(nt);
    }

    const decrementQuantity = (idx) => {
        const product = cartProducts[idx];
        const oldQuantity = product.quantity;
        const priceProduct = product.price;
        const totalPrice = product.totalPrice;

        let newQuantity = oldQuantity - 1;
        let newTotalPrice = totalPrice - priceProduct;
        let nt = total - priceProduct;
        let nst = subtotal - priceProduct;

        if (oldQuantity <= 1) {
            newQuantity = oldQuantity;
            newTotalPrice = totalPrice;
            nt = total;
            nst = subtotal;
        }

        setSubTotal(nst);
        setTotal(nt);
        cartProducts[idx].totalPrice = newTotalPrice;
        cartProducts[idx].quantity = newQuantity;
        const ncp = [...cartProducts];
        setCart(ncp);

    }
    const incrementQuantity = (idx) => {
        const product = cartProducts[idx];
        const oldQuantity = product.quantity;
        const priceProduct = product.price;
        const totalPrice = product.totalPrice;

        let newQuantity = oldQuantity + 1;
        let newTotalPrice = totalPrice + priceProduct;
        let nt = total + priceProduct;
        let nst = subtotal + priceProduct;

        setSubTotal(nst);
        setTotal(nt);
        cartProducts[idx].totalPrice = newTotalPrice;
        cartProducts[idx].quantity = newQuantity;
        const ncp = [...cartProducts];
        setCart(ncp);
    }

    return (
        cartProducts.length === 0 ? <EmptyCart /> :
            <div className='shopping-cart-container'>
                <div className='shop-c-heading'>
                    SHOPPING CART
            </div>
                <div className='products-table'>
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
                        {
                            cartProducts.map((item, idx) => {
                                return <tr id={'tr-' + idx} key={idx}>
                                    <td className='prod-img'>
                                        <img src={item.img} />
                                    </td>
                                    <td className='name-val-td'>
                                        <span className='name-val'>
                                            {item.name}
                                        </span>
                                    </td>
                                    <td>
                                        <span className='price-val'>
                                            {item.price}
                                        </span>
                                    </td>
                                    <td>
                                        <span className='quantity-val-container'>
                                            {/* <input type="text" pattern="[0-9]*" onInput={(e) => changeQuantity(e, idx)} min='1' /> */}
                                            <span onClick={() => decrementQuantity(idx)} className='dec-q'>-</span>
                                            <span className='quantity'>{item.quantity}</span>
                                            <span onClick={() => incrementQuantity(idx)} className='inc-q'>+</span>
                                        </span>
                                    </td>
                                    <td className='rb-td'>
                                        <span onClick={() => removeFromCart(idx)} className='remove-btn'>
                                            REMOVE
                                    </span>
                                    </td>
                                    <td>
                                        <span className='total-price-val'>
                                            {item.totalPrice}
                                        </span>
                                    </td>
                                </tr>
                            })
                        }
                    </table>
                </div>
                <div className='checkout-wrapper'>
                    <div className='subtotal'>
                        Subtotal: <span className='subtotal-val'>${subtotal}</span>
                    </div>
                    <div className='total'>
                        Total: <span className='total-val'>${total}</span>
                    </div>
                    <div className='control-btns-wrapper'>
                        <div>
                            <Link to='/'>
                                <button className='back-ts'>BACK TO SHOP</button>
                            </Link>
                        </div>
                        <div>
                            <button className='checkout-btn'>CHECKOUT</button>
                        </div>
                    </div>
                </div>
                <div className='discount-code-wrapper'>
                    <button onClick={handleDiscountBtnClick} className='dc-btn'>DISCOUNT CODE</button>
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
