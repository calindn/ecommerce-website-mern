import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'


export default function Product({ sku, src, text, price, toHideButton, brandName, listaAtribute, categorie, descriere }) {

    // load image 
    let images;
    let img;

    // if (window.location.pathname === '/' || window.location.pathname.) {
    images = require.context('../../../../images', true);
    img = images('.' + src[0].substr(1));


    // shorten text 
    const shortText = text.split(' ').filter((item, index) => index < 10).join(' ');

    // product details
    const product = {
        sku,
        img,
        name: text,
        price: parseFloat(price.slice(0, -3)),
        quantity: 1,
        totalPrice: parseFloat(price.slice(0, -3))
    }

    const scrollToTop = () => {
        const scrollOptions = {
            top: 0
        }
        window.scrollTo(scrollOptions);
    }
    const scrollToTopAndAddToLocalStorage = () => {
        const scrollOptions = {
            top: 0
        }
        window.scrollTo(scrollOptions);

        let inCartOld = JSON.parse(localStorage.getItem('inCart') || "[]");
        inCartOld.push(product);

        localStorage.setItem('inCart', JSON.stringify(inCartOld))

        document.querySelector('#weirdSpan').innerHTML = inCartOld.length;
    }

    return (
        <div className='product-card-container'>
            <Link onClick={scrollToTop} to={{ pathname: '/details', state: { sku, src, price, toHideButton, brandName, listaAtribute, text, categorie, descriere } }}>
                <div className='product-img-container'>
                    <img src={img} alt='product' />
                    <div className='overlay'></div>
                    <div className='view-container'>
                        <i class="fas fa-eye"></i>
                    </div>
                </div>
            </Link>

            <div className='product-desc-container'>
                <p className='txt'>{shortText}</p>
                <p className='price'>{price}</p>
                {
                    toHideButton ? null : (<Link onClick={scrollToTopAndAddToLocalStorage} to={{ pathname: '/cart', itemCart: product }} > <button>
                        <i class="fas fa-cart-plus"></i>
                        <span>ADAUGA IN COS</span>
                    </button></Link>)
                }

            </div>
        </div >
    )
}
