import React from 'react'
import './Registration.css'

import FooterComponent from '../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../LandingPage/CopyrightComponent/CopyrightComponent'

export default function Registration() {
    return (
        <div className='registration-container'>
            <div className='reg-heading'>
                REGISTRATION
            </div>
            <div className='reg-form-container'>
                <input type='text' placeholder='First Name' />
                <input type='text' placeholder='Last Name' />
                <input type='email' placeholder='Email Address' required='true' />
                <input type='password' placeholder='Password' required='true' />
                <input type='password' placeholder='Confirm Password' required='true' />
                <button>Sign Up</button>
            </div>

            <div className='registration-footer-copyright'>
                <div>
                    <FooterComponent />
                </div>
                <div>
                    <CopyrightComponent />
                </div>
            </div>
        </div>
    )
}
