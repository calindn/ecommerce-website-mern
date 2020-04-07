import React from 'react'
import { Link } from 'react-router-dom'
import './Authorization.css'

import FooterComponent from '../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../LandingPage/CopyrightComponent/CopyrightComponent'

export default function Authorization() {
    return (
        <div className='authorization-container'>
            <div className='auth-heading'>
                AUTHORIZATION
            </div>
            <div className='login-container'>
                <input type='email' required='true' placeholder='Email Address' />
                <input type='password' required='true' placeholder='Password' />
                <div>
                    <div className='auth-btn'>
                        <button>Sign In</button>
                    </div>
                    <div className='alternatives-auth'>
                        <Link className='alternative' style={{ 'textDecoration': 'none' }} to='/forgotPass'>
                            <div>Forgot your password ?</div>
                        </Link>
                        <Link className='alternative' style={{ 'textDecoration': 'none' }} to='/registration'>
                            <div>Don't have an account yet ?</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='auth-footer-copyright'>
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
