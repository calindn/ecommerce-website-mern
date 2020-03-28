import React from 'react'
import './Logo.css'

export default function Logo({ class_name }) {
    return (
        <div className={'logo-container ' + class_name}>
            <span id='comp'>COMP</span>
            <span id='shop'>SHOP</span>
        </div>
    )
}

