import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'


export default function Product({ src, text, price, toHideButton, brandName }) {

    // load image 
    const images = require.context('../../../../images', true);
    let img = images('.' + src);
    // shorten text 
    const shortText = text.split(' ').filter((item, index) => index < 10).join(' ');



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

    const product = {
        img: src,
        name: text,
        price: parseFloat(price.substr(1)),
        quantity: 1,
        totalPrice: parseFloat(price.substr(1))
    }
    // console.log(product);

    return (
        <div className='product-card-container'>
            <Link onClick={scrollToTop} to={{ pathname: '/details', state: { src: src, price: price, toHideButton: toHideButton, brandName: brandName } }}>
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
                        <span>Add to cart</span>
                    </button></Link>)
                }

            </div>
        </div >
    )
}
