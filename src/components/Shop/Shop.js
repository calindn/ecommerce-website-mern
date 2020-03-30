import React, { Component } from 'react'
import FooterComponent from '../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../LandingPage/CopyrightComponent/CopyrightComponent'
import Categories from './Categories/Categories'
import FilterBy from './FilterBy/FilterBy'

export default class Shop extends Component {
    render() {
        return (
            <div>
                <div className='categories-container'>
                    <Categories />
                </div>
                <div>
                    <FilterBy />
                </div>
                <FooterComponent />
                <CopyrightComponent />
            </div>
        )
    }
}
