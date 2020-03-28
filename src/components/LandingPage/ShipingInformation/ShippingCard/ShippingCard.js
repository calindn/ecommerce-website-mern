import React from 'react'
import './ShippingCard.css'

export default function ShippingCard({ htext, text, iconClassName, classes, hclass, posClass }) {
    return (
        <div className={'shippingcard-container ' + posClass}>
            <div className='icon-container'>
                <i className={'fas ' + iconClassName}></i>
            </div>
            <div className='sc-right-side'>
                <div className={'sc-heading-txt ' + hclass}>
                    {htext}
                </div>
                <div className={'sc-text ' + classes}>
                    {text}
                </div>
            </div>
        </div>
    )
}
