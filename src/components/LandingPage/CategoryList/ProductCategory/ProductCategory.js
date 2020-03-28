import React, { Component } from 'react'

import './ProductCategory.css'


export default function ProductCategory({ img, categoryName, iconClass, bgColor }) {
    return (
        <div className='productcateg-container' >
            <div className='wrapper-tablets-i'>
                <div className='tablets'>
                    {categoryName}
                </div>
                <div className='icon-wrapper'>
                    <i className={"fas " + iconClass}></i>
                </div>
            </div>
            <div>
                <img id='categ-img' src={img} alt='category' />
            </div>
        </div >
    );
}
