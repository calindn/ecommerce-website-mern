import React, { Component } from 'react'
import MainImageSlider from './MainImageSlider/MainImageSlider'

import './LandingPage.css'

// assets 
import slide1 from './MainImageSlider/assets/slide_11.jpg'
import slide2 from './MainImageSlider/assets/slide_22.png'
import slide3 from './MainImageSlider/assets/slide_3.jpg'
import CategoryList from './CategoryList/CategoryList'
import SaleCategory from './SaleCategory/SaleCategory'
import NewProductsList from './NewProductsList/NewProductsList'
import ShipingInformation from './ShipingInformation/ShipingInformation'
import FooterComponent from './FooterComponent/FooterComponent'
import CopyrightComponent from './CopyrightComponent/CopyrightComponent'

// create styles object
const s = {
    container: 'screenW screenH dGray col',
    header: 'flex1 fCenter fSize2',
    main: 'flex8 white',
    footer: 'flex1 fCenter'
};

// slide data 
const slides = [slide1, slide2, slide3];

export default class LandingPage extends Component {
    render() {
        return (
            <div className='slider-container'>
                <MainImageSlider slides={slides} />
                <CategoryList />
                <SaleCategory />
                <NewProductsList />
                <ShipingInformation />
                <FooterComponent />
                <CopyrightComponent />
            </div>
        )
    }
}
