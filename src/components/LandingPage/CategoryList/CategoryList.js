import React, { Component } from 'react'

import './CategoryList.css'
import ProductCategory from './ProductCategory/ProductCategory'

// images
import tablet from '../../LandingPage/MainImageSlider/assets/tablets_img.png'
import laptop from '../../LandingPage/MainImageSlider/assets/mac_img.png'
import desktop from '../../LandingPage/MainImageSlider/assets/desktop_pc_img.png'
import printer from '../../LandingPage/MainImageSlider/assets/printer_img.png'
import smartwatch from '../../LandingPage/MainImageSlider/assets/smartwatch_img.png'
import networking from '../../LandingPage/MainImageSlider/assets/networking_img.png'

export default class CategoryList extends Component {
    render() {
        return (
            <div className='categlist-container'>
                <div>
                    <ProductCategory img={tablet} categoryName='TABLETS' iconClass='fa-tablet-alt' />
                </div>
                <div>
                    <ProductCategory img={laptop} categoryName='LAPTOPS' iconClass='fa-laptop' />
                </div>
                <div>
                    <ProductCategory img={desktop} categoryName='DESKTOP PCS' iconClass='fa-desktop' />
                </div>
                <div>
                    <ProductCategory img={printer} categoryName='PRINTERS' iconClass='fa-file' />
                </div>
                <div>
                    <ProductCategory img={smartwatch} bgColor='white' categoryName='SMART TECH' iconClass='fa-lightbulb' />
                </div>
                <div>
                    <ProductCategory img={networking} categoryName='NETWORKING' iconClass='fa-server' />
                </div>
            </div>
        )
    }
}
