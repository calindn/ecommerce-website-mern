import React, { Component } from 'react'
import Product from './Product/Product'
import './NewProductsList.css'

import product_img1 from '../../LandingPage/MainImageSlider/assets/product_img1.jpg'
import product_img2 from '../../LandingPage/MainImageSlider/assets/product_img2.jpg'
import product_img3 from '../../LandingPage/MainImageSlider/assets/product_img3.jpg'
import product_img4 from '../../LandingPage/MainImageSlider/assets/product_img4.jpg'
import product_img5 from '../../LandingPage/MainImageSlider/assets/product_img5.jpg'
import product_img6 from '../../LandingPage/MainImageSlider/assets/product_img6.jpg'
import product_img7 from '../../LandingPage/MainImageSlider/assets/product_img7.jpg'
import product_img8 from '../../LandingPage/MainImageSlider/assets/product_img8.jpg'

export default class NewProductsList extends Component {
    render() {
        return (
            <div className='newproductslist-container'>
                <div className='newproductslist-heading'>
                    <span>PRODUCTS</span>
                </div>
                <div className='products-container'>
                    <div>
                        <Product src={product_img1} text='Silicone Case for iPad mini' price='$45.00' />
                    </div>
                    <div>
                        <Product src={product_img2} text='Silicone Case for iPad mini' price='$45.00' />
                    </div>
                    <div>
                        <Product src={product_img3} text='Silicone Case for iPad mini' price='$45.00' />
                    </div>
                    <div>
                        <Product src={product_img4} text='Silicone Case for iPad mini' price='$45.00' />
                    </div>
                    <div>
                        <Product src={product_img5} text='Silicone Case for iPad mini' price='$45.00' />
                    </div>
                    <div>
                        <Product src={product_img6} text='Silicone Case for iPad mini' price='$45.00' />
                    </div>
                    <div>
                        <Product src={product_img7} text='Silicone Case for iPad mini' price='$45.00' />
                    </div>
                    <div>
                        <Product src={product_img8} text='Silicone Case for iPad mini' price='$45.00' />
                    </div>
                </div>

            </div>
        )
    }
}
