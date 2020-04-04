import React from 'react'
import './Product.css'

export default function Product({ src, text, price, toHideButton }) {
    return (
        <div className='product-card-container'>
            <div className='product-img-container'>
                <img src={src} alt='product' />
                <div className='overlay'></div>
                <div className='view-container'>
                    <i class="fas fa-eye"></i>
                </div>
            </div>
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
