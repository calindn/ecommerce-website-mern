import React from 'react'
import './RightSideProductDescription.css'

import SelectList from '../../SelectList/SelectList'
import Product from '../../../LandingPage/NewProductsList/Product/Product'
import product_img1 from '../../../LandingPage/MainImageSlider/assets/product_img1.jpg'

import FooterComponent from '../../../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../../../LandingPage/CopyrightComponent/CopyrightComponent'

export default function RightSideProductDescription() {

    const valuesMaterial = ['Silicone', 'Leather'];
    const valuesDiagonal = ['5.5 Inch', '4.7 Inch'];
    const valuesPattern = ['Animal', 'Solid', 'Flowers'];
    return (
        <div className='rside-prod-desc-container'>
            <section className='section1'>
                <div className='brand'>Brand:    <span>Samsung</span></div>
                <div className='sku'>SKU:     <span>Silicone Case for iPad mini</span></div>
                <div className='rspd-title'><h1>Silicone Case for iPad mini</h1></div>
                <div className='rspd-price'>$45.00</div>
                <div className='hrow'></div>
            </section>
            <section className='section2'>
                <div className='material-sel-wrapper'>
                    <div className='lbl-for-material'>Material</div>
                    <SelectList values={valuesMaterial} />
                </div>
                <div className='diagonal-sel-wrapper'>
                    <div className='lbl-for-diagonal'>Diagonal</div>
                    <SelectList values={valuesDiagonal} />
                </div>
                <div className='pattern-sel-wrapper'>
                    <div className='lbl-for-pattern'>Pattern</div>
                    <SelectList values={valuesPattern} />
                </div>
                <div className='quantity-wrapper'>
                    <label for='quantity'>Quantity:</label><br />
                    <input type='number' placeholder='0' min='1' />
                    <div className='avlbl-quant'>
                        <div className='lbl'>Available quantity:</div>
                        <div className='quant'>0</div>
                    </div>
                </div>
                <div className='add-to-cart-wrapper'>
                    <button>
                        <i class="fas fa-cart-plus"></i>
                        <span>Add to cart</span>
                    </button>
                </div>
            </section>
            <section className='details'>
                <div className='details-lbl'>Details</div>
                <div className='d-hr'></div>
                <div className='content'>
                    <p>
                        We are living in the epoch of great technical progress and we are sure that new technologies are our future. You know that computers are being applied in all spheres of society. It is a tremendous achievement of mankind. It is totally safe for environment and for the people, it runs with electricity. The most important thing is that the computer technology has great perspectives for further development and it could be called a panacea for humanity. It seems that computer is such a revolutionary invention that we could not even realize the true extent of its significance. Some people are even afraid of such rapid and striking computer expansion; they state that mankind is in danger because of it. Their main argument is the problem of artificial intelligence. But we hope that all these problems will disappear soon.
                    </p>

                    <p>
                        So, it is natural that this sphere is one of the most popular and it is really hard to offer computer hardware because of great number of competitors. We are providing a great choice of different commodities. We are producing reliable and durable goods. That is why we are always in touch with the latest new inventions and improvements. There is no doubt that we are the leaders and you don’t have to worry about our reputation because it is perfect. We have a great number of different but grateful customers and this fact proves that our goods are of high quality and fair price. We’re sure that no one could stay indifferent because everybody wants to get professionally made up product and pay a fair price for that.
                    </p>
                    <p>
                        We can help you solve any problem because we provide only rational solutions. We can satisfy customers with different claims. Nowadays we have a problem of choice because we are living in society of total consumption and this process gives a negative effect. Simple customer has a problem of a lack of information. And we have a superb 24/7 support system where you can get more information about our products, terms, delivery system and much more.
                    </p>
                </div>
            </section>
            <section className='related-section'>
                <div className='rel-prod-lbl'>RELATED PRODUCTS</div>
                <div className='rel-prods'>
                    <div>
                        <Product toHideButton={true} src={product_img1} text='Silicone Case for iPad mini Xiaomi' price='$45.00' />
                    </div>
                    <div>
                        <Product toHideButton={true} src={product_img1} text='Silicone Case for iPad mini Xiaomi' price='$45.00' />
                    </div>
                    <div>
                        <Product toHideButton={true} src={product_img1} text='Silicone Case for iPad mini Xiaomi' price='$45.00' />
                    </div>
                    <div>
                        <Product toHideButton={true} src={product_img1} text='Silicone Case for iPad mini Xiaomi' price='$45.00' />
                    </div>
                </div>
            </section>
            <div className='rspd-footer-cpyright'>
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
