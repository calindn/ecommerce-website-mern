import React from 'react'
import './ContactUs.css'


import FooterComponent from '../../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../../LandingPage/CopyrightComponent/CopyrightComponent'

export default function ContactUs() {
    return (
        <div className='contact-us-container'>
            <div className='cu-h1'>
                CONTACT US
                </div>
            <div className='cu-another-wrapper'>
                <div className='l-side'>
                    <div className='txt'>
                        Feel free to drop us a line via this contact form, or visit our headquarter.
                        The NDA Sport team is always looking for feedbacks and comments from you to
                        improve our service quality. Our working hours is from 9:00AM to 5:00PM from
                        Monday to Friday (except holidays and weekends).
                        </div>
                    <div className='wrapper'>
                        <div className='address-wrapper'>
                            <div className='heading'>
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Address</span>
                            </div>
                            <div className='content'>
                                30 Beer Tunnel, Avenue 15th, Randall District, New York.
                            </div>
                        </div>
                        <div className='opening-h-wrapper'>
                            <div className='heading'>
                                <i class="far fa-clock"></i>
                                <span>Opening Hours</span>
                            </div>
                            <div className='content'>
                                Monday to Friday: 8:00AM - 8:00PM Saturday & Sunday: 10:00AM - 6:00PM
                            </div>
                        </div>
                        <div className='phone-wrapper'>
                            <div className='heading'>
                                <i class="fas fa-phone-alt"></i>
                                <span>Phone</span>
                            </div>
                            <div className='content'>
                                <span>Mobile: +61 3 9987 5654</span>
                            </div>
                        </div>
                        <div className='email-wrapper'>
                            <div className='heading'>
                                <i class="fas fa-envelope"></i>
                                <span>Email</span>
                            </div>
                            <div className='content'>
                                hello@ndasports.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className='r-side'>
                    <div className='heading'>
                        Get in touch
                    </div>
                    <div className='form-wrapper'>
                        <input type='text' placeholder='Name' />
                        <input type='email' required='true' placeholder='Email *' />
                        <input type='text' placeholder='Phone Number' />
                        <textarea placeholder="What's on your mind?"></textarea>
                        <button >Submit</button>
                    </div>
                </div>
            </div>


            <div className='cu-footer-copyright'>
                <div>
                    <FooterComponent />
                </div>
                <div>
                    <CopyrightComponent />
                </div>
            </div>
        </div >
    )
}
