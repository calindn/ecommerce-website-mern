import React from 'react'
import './CopyrightComponent.css'

var FontAwesome = require('react-fontawesome')


export default function CopyrightComponent() {

    const topFunction = () => {
        document.body.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className='cpr-container'>
            <i class="far fa-copyright"></i>
            <FontAwesome style={{ 'color': 'white' }} name='fas fa-copyright' />

            <span> 2020 TechShop. Toate Drepturile Rezervate</span>
            {/* <i onClick={() => topFunction()} id="toTop" class="fas fa-arrow-up"></i> */}
            <FontAwesome style={{ 'color': 'white' }} name='fas fa-arrow-up' />

        </div>
    )
}
