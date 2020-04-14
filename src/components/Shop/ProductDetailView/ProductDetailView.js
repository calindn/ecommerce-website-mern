import React, { Component } from 'react'
import NavigationHistory from '../NavigationHistory/NavigationHistory'
import ImageSlideshow from './ImageSlideshow/ImageSlideshow'
import RightSideProductDescription from './RightSideProductDescription/RightSideProductDescription'
import './ProductDetailView.css'

export default class ProductDetailView extends React.Component {

    componentDidMount() {
        const { src } = this.props.location.state;
        console.log('brandName ', src);
    }



    render() {

        return (
            <div className='prod-detail-view-container'>
                <div>
                    <NavigationHistory path='Samsung,Iphone 10' />
                </div>
                <div className='wrapper'>
                    <div className='img-slideshow-wrapper'>
                        <ImageSlideshow />
                    </div>
                    <div className='rsp-desc-wrapper'>
                        <RightSideProductDescription />
                    </div>
                </div>

            </div>
        )
    }

}
