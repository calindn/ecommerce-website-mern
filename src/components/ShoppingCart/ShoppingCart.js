import React, { Fragment, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './ShoppingCart.css'

import FooterComponent from '../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../LandingPage/CopyrightComponent/CopyrightComponent'
import EmptyCart from './EmptyCart/EmptyCart'


import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { toast } from 'react-toastify'
import PayPalButton from '../PaypalPayment/PayPalButton'
import FormDialog from './FormDialog/FormDialog'
import jwt from 'jsonwebtoken'

toast.configure();

export default function ShoppingCart({ match, location }) {

    const history = useHistory();

    const itemCart = location.itemCart;
    console.log('brandName ', itemCart);

    let inCart = JSON.parse(localStorage.getItem('inCart') || "[]");

    const originalCartProducts = inCart;


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

    // remove all items 
    const clearCart = () => {
        localStorage.removeItem('inCart');
        setCart([]);
    }



    const [product] = useState({
        name: 'Tesla Roadster',
        price: 542,
        description: 'Cool car'
    })

    console.log('------------------', cartProducts);
    // handleToken from Stripe payment
    const handleToken = async (token, product) => {

        let t = total * .22;
        const res = await axios.post(`http://localhost:5000/checkout`, {
            token,
            cartProducts,
            t
        });


        //-------------------------------------------------------------------
        const decodedClientData = jwt.decode(localStorage.getItem('jwtToken'));
        const { userId, prenume, nume, email, grupClient, nrComenzi } = decodedClientData;
        const order = {
            produse: cartProducts.map((item) => { return { prod_id: item.sku, count: item.quantity } }),
            pret_total: total,
            data: '2002-12-09',
            durata: 2,
            transport: 'curier',
            metoda_plata: 'card bancar',
            client: userId,
            reducere: []
        }


        // create order-------------------------------------------------------------
        let result = await axios.post(`http://localhost:5000/api/v1/orders/`, order);
        // update nr of orders for this client
        result = await axios.put(`http://localhost:5000/api/v1/clients/${userId}`, { nr_comenzi: nrComenzi + 1 });


        //-------------------------
        const { status } = res.data;
        if (status === 'success') {
            toast('Success! Check email for details', { type: 'success' });
            document.querySelector('#weirdSpan').innerHTML = '0';
            clearCart();

        } else {
            toast('Something went wrong', { type: 'error' });
        }

    }

    return (
        cartProducts.length === 0 ? <EmptyCart /> :
            <div className='shopping-cart-container'>
                <div className='shop-c-heading'>
                    COSUL MEU
            </div>
                <div className='products-table'>
                    <table>
                        <tr>
                            <th>

                            </th>
                            <th>
                                <span>Nume</span>
                            </th>
                            <th>
                                <span>Pret</span>
                            </th>
                            <th>
                                <span>Cantitate</span>
                            </th>
                            <th>

                            </th>
                            <th>
                                <span>Pretul Total</span>
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
                                            STERGE
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
                        Subtotal: <span className='subtotal-val'>{subtotal}lei</span>
                    </div>
                    <div className='total'>
                        Total: <span className='total-val'>{total}lei</span>
                    </div>
                    <div className='control-btns-wrapper'>
                        <div className='back'>
                            <Link to='/'>
                                <button className='back-ts'>INAPOI</button>
                            </Link>
                        </div>
                        <div className='payment-methods'>
                            {/* <div>
                                <button className='checkout-btn'>TRIMITE COMANDA</button>
                            </div> */}
                            <div className='ridicare-sediu-container'>
                                {/* <button>Ridicare sediu</button> */}
                                <FormDialog products={cartProducts} total={total} clearCart={clearCart} />
                            </div>
                            <div className='stripe-container'>
                                <StripeCheckout
                                    stripeKey="pk_test_NLBQh1kaJA8nytzJ5ZgwaXbq007fH2DEOs"
                                    token={handleToken}
                                    billingAddress
                                    shippingAddress
                                    amount={total * .22 * 100}
                                    name={'Order Info'}
                                />
                            </div>
                            <div className='paypal-container'>
                                <PayPalButton products={cartProducts} totalInLei={total} clearCart={clearCart} history={history} total={Math.ceil(total * .22)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='discount-code-wrapper'>
                    <button onClick={handleDiscountBtnClick} className='dc-btn'>COD DISCOUNT</button>
                    <div className='to-be-shown-on-click'>
                        <input type='text' placeholder='CODULTAUPROMO' />
                        <button>APLICA</button>
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
