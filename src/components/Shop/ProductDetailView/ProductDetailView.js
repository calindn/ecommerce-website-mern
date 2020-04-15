import React, { Component } from 'react'
import NavigationHistory from '../NavigationHistory/NavigationHistory'
import ImageSlideshow from './ImageSlideshow/ImageSlideshow'
import RightSideProductDescription from './RightSideProductDescription/RightSideProductDescription'
import './ProductDetailView.css'

export default class ProductDetailView extends React.Component {

    componentDidMount() {

    }



    render() {

        const { src, price, toHideButton, brandName, listaAtribute, text, categorie, descriere } = this.props.location.state;
        // console.log('aaaaaaaaaaaaaaaaaaala', brandName);
        return (
            <div className='prod-detail-view-container'>
                <div>
                    <NavigationHistory path={`${categorie.charAt(0).toUpperCase() + categorie.slice(1)}, ${text}`} />
                </div>
                <div className='wrapper'>
                    <div className='img-slideshow-wrapper'>
                        <ImageSlideshow images={src} />
                    </div>
                    <div className='rsp-desc-wrapper'>
                        <RightSideProductDescription state={this.props.location.state} src={src} price={price} brandName={brandName} listaAtribute={listaAtribute} text={text} categorie={categorie} descriere={descriere} />
                    </div>
                </div>

            </div>
        )
    }

}
