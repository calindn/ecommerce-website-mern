import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CategoryList.css'
import ProductCategory from './ProductCategory/ProductCategory'

// images
import tablet from '../../LandingPage/MainImageSlider/assets/tablets_img.png'
import laptop from '../../LandingPage/MainImageSlider/assets/mac_img.png'
import smartwatch from '../../LandingPage/MainImageSlider/assets/smartwatch_img.png'
import televizor from '../../LandingPage/MainImageSlider/assets/televizor_2.png'
import smartphone from '../../LandingPage/MainImageSlider/assets/smartphone.png'
import toate from '../../LandingPage/MainImageSlider/assets/all_products.png'
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
                    <Link onClick={this.scrollToTop} style={linkStyles} to={{ pathname: '/shop/Tableta' }}>
                        <ProductCategory img={tablet} categoryName='TABLETA' iconClass='fa-tablet-alt' />
                    </Link>
                </div>
                <div>
                    <Link onClick={this.scrollToTop} style={linkStyles} to={{ pathname: '/shop/Smartwatch' }}>
                        <ProductCategory img={smartwatch} categoryName='SMARTWATCH' iconClass='fa-clock' />
                    </Link>
                </div>
                <div>
                    <Link onClick={this.scrollToTop} style={linkStyles} to={{ pathname: '/shop/Laptop' }}>
                        <ProductCategory img={laptop} categoryName='LAPTOP' iconClass='fa-desktop' />
                    </Link>
                </div>
                <div>
                    <Link onClick={this.scrollToTop} style={linkStyles} to={{ pathname: '/shop/Televizor' }}>
                        <ProductCategory img={televizor} categoryName='TELEVIZOR' iconClass='fa-tv' />
                    </Link>
                </div>
                <div>
                    <Link onClick={this.scrollToTop} style={linkStyles} to={{ pathname: '/shop/Smartphone' }}>
                        <ProductCategory img={smartphone} bgColor='white' categoryName='SMARTPHONE' iconClass='fa-mobile-alt' />
                    </Link>
                </div>
                <div>
                    <Link onClick={this.scrollToTop} style={linkStyles} to={{ pathname: '/shop/Toate' }}>
                        <ProductCategory img={toate} categoryName='TOATE' iconClass='fa-lightbulb' />
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