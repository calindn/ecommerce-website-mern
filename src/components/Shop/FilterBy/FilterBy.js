import React from 'react'
import './FilterBy.css'

export default function FilterBy() {
    return (
        <div className='filterby-container'>
            <div className='filterby-container'>
                FILTER BY
            </div>
            <div className='filter-body'>
                <div className='price-label'>Price</div>
                <div className='range-price'>
                    <input type='number' placeholder='min' id='min-price' min='0' />
                    <input type='number' placeholder='max' id='max-price' />
                </div>
                <div className='brands-label'>Brands</div>
            </div>
        </div>
    )
}
