import React from 'react'
import './CopyrightComponent.css'

export default function CopyrightComponent() {

    const topFunction = () => {
        document.body.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className='cpr-container'>
            <i class="far fa-copyright"></i>
            <span> 2020 TechShop. Toate Drepturile Rezervate</span>
            <i onClick={() => topFunction()} id="toTop" class="fas fa-arrow-up"></i>
        </div>
    )
}
