import React, { Component } from 'react'
import MainImageSlider from './MainImageSlider/MainImageSlider'

import './LandingPage.css'

// assets 
import slide1 from './MainImageSlider/assets/slide1.jpg'
import slide2 from './MainImageSlider/assets/slide2.jpg'
import slide3 from './MainImageSlider/assets/slide3.jpg'
import slide4 from './MainImageSlider/assets/slide4.jpg'
import slide5 from './MainImageSlider/assets/slide5.jpg'

// create styles object
const s = {
    container: 'screenW screenH dGray col',
    header: 'flex1 fCenter fSize2',
    main: 'flex8 white',
    footer: 'flex1 fCenter'
};

// slide data 
const slides = [slide1, slide2, slide3, slide4, slide5];

export default class LandingPage extends Component {
    render() {
        return (
            <div className='wtf'>
                <MainImageSlider slides={slides} />
            </div>
        )
    }
}
