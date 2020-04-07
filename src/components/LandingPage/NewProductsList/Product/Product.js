import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

export default function Product({ src, text, price, toHideButton, brandName }) {

    const scrollToTop = () => {
        const scrollOptions = {
            top: 0
        }
        window.scrollTo(scrollOptions);
    }
    return (
        <div className='product-card-container'>
            <Link onClick={scrollToTop} to={{ pathname: '/details', state: { src: src, price: price, toHideButton: toHideButton, brandName: brandName } }}>
                <div className='product-img-container'>
                    <img src={src} alt='product' />
                    <div className='overlay'></div>
                    <div className='view-container'>
                        <i class="fas fa-eye"></i>
                    </div>
                </div>
            </Link>

            <div className='product-desc-container'>
                <p className='txt'>{text}</p>
                <p className='price'>{price}</p>
                {
                    toHideButton ? null : (<button>
                        <i class="fas fa-cart-plus"></i>
                        <span>Add to cart</span>
                    </button>)
                }

            </div>
        </div>
    )
}
