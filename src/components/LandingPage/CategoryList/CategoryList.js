import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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

    scrollToTop() {
        const scrollOptions = {
            top: 0
        }
        window.scrollTo(scrollOptions);
    }
    render() {
        return (
            <div className='categlist-container'>
                <div>
                    <Link onClick={this.scrollToTop} style={linkStyles} to={{ pathname: '/shop/Tablets' }}>
                        <ProductCategory img={tablet} categoryName='TABLETS' iconClass='fa-tablet-alt' />
                    </Link>
                </div>
                <div>
                    <Link onClick={this.scrollToTop} style={linkStyles} to={{ pathname: '/shop/Laptops' }}>
                        <ProductCategory img={laptop} categoryName='LAPTOPS' iconClass='fa-laptop' />
                    </Link>
                </div>
                <div>
                    <Link onClick={this.scrollToTop} style={linkStyles} to={{ pathname: '/shop/Desktop_PCs' }}>
                        <ProductCategory img={desktop} categoryName='DESKTOP PCS' iconClass='fa-desktop' />
                    </Link>
                </div>
                <div>
                    <Link onClick={this.scrollToTop} style={linkStyles} to={{ pathname: '/shop/Printers' }}>
                        <ProductCategory img={printer} categoryName='PRINTERS' iconClass='fa-file' />
                    </Link>
                </div>
                <div>
                    <Link onClick={this.scrollToTop} style={linkStyles} to={{ pathname: '/shop/Smart_Tech' }}>
                        <ProductCategory img={smartwatch} bgColor='white' categoryName='SMART TECH' iconClass='fa-lightbulb' />
                    </Link>
                </div>
                <div>
                    <Link onClick={this.scrollToTop} style={linkStyles} to={{ pathname: '/shop/Networking' }}>
                        <ProductCategory img={networking} categoryName='NETWORKING' iconClass='fa-server' />
                    </Link>
                </div>
            </div>
        )
    }
}

const linkStyles = {
    'textDecoration': 'none',
    'color': '#000000'
}