import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Authorization.css'

import FooterComponent from '../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../LandingPage/CopyrightComponent/CopyrightComponent'

export default function Authorization() {

    const logIn = async () => {
        const email = document.querySelector('#l-email').value;
        const parola = document.querySelector('#l-pass').value;

        const clientData = {
            email,
            parola
        };

        const res = await axios.post(`http://localhost:5000/api/v1/clients/login`, clientData);
        console.log(res);
    }
    return (
        <div className='authorization-container'>
            <div className='auth-heading'>
                AUTORIZARE
            </div>
            <div className='login-container'>
                <input id='l-email' type='email' required='true' placeholder='Adresa Email' />
                <input id='l-pass' type='password' required='true' placeholder='Parola' />
                <div>
                    <div className='auth-btn'>
                        <button onClick={() => logIn()}>Intra in cont</button>
                    </div>
                    <div className='alternatives-auth'>
                        <Link className='alternative' style={{ 'textDecoration': 'none' }} to='/forgotPass'>
                            <div>Ai uitata parola ?</div>
                        </Link>
                        <Link className='alternative' style={{ 'textDecoration': 'none' }} to='/registration'>
                            <div>Nu ai un cont ?</div>
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
