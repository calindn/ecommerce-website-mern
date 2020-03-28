import React from 'react'
import './ShipingInformation.css'
import ShippingCard from './ShippingCard/ShippingCard'

export default function ShipingInformation() {
    return (
        <div className='shippinginfo-container'>
            <div>
                <ShippingCard posClass='call-pos-class' classes='call' htext='(123) 456-7890' text='Round-the-clock free hotline (24/7)' iconClassName='fa-phone-alt' />
            </div>
            <div className='vl'></div>
            <div>
                <ShippingCard classes='free-shipping-text' htext='FREE SHIPPING' text='We provide you with fast and free delivery regardless of the product size and value.' iconClassName='fa-truck' />
            </div>
            <div className='vl'></div>
            <div>
                <ShippingCard classes='ret-exch-text' htext='RETURN & EXCHANGE' text='You can return or exchange the item within 14 days.' iconClassName='fa-redo' />
            </div>
            <div className='vl'></div>
            <div>
                <ShippingCard hclass='satisf-guarantee-heading' classes='satisf-guarantee-text' htext='SATISFACTION GUARANTEE' text='We are committed to your satisfaction with every order.' iconClassName='fa-thumbs-up' />
            </div>
        </div>
    )
}
