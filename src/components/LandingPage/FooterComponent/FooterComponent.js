import React from 'react'
import './FooterComponent.css'
import { Link } from 'react-router-dom'
import Logo from '../../TopComponent/Logo/Logo'


export default function FooterComponent() {

    const scrollToTop = () => {
        const scrollOptions = {
            top: 0
        }
        window.scrollTo(scrollOptions);
    }
    return (
        <div className='footer-container'>
            <div className='content-container'>
                <div className='content1'>
                    <div className='fc-logo-container'>
                        <Logo class_name='colorW' />
                    </div>
                    <div className='fc-c1-txt'>
                        Get the power to do more your way. Whether you're a gamer,
                        a designer, a student or parent, a writer, a dealmaker,
                        or a Jack or Jill of all trades – at the CompShop you'll
                        find the perfect PCs for all that you do. Explore our collection
                        by type – and discover devices that can make every project your best.
                    </div>
                </div>
                <div className='content2'>
                    <div className='fc-c2-heading'>
                        INFORMATION
                    </div>
                    <div className='fc-c2-ul-container'>
                        <ul>
                            <Link onClick={() => { scrollToTop() }} style={linkStyles} to='/about_us'>
                                <li>About Us</li>
                            </Link>
                            <Link onClick={() => { scrollToTop() }} style={linkStyles} to='/customer_service'>
                                <li>Customer Service</li>
                            </Link>
                            <li>Privacy Policy</li>
                            <Link onClick={() => { scrollToTop() }} style={linkStyles} to='/contact_us'>
                                <li>Contact Us</li>
                            </Link>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
                <div className='content3'>
                    <div className='fc-c2-heading'>
                        WHY BUY FROM US
                    </div>
                    <div className='fc-c3-ul-container'>
                        <ul>
                            <Link onClick={() => { scrollToTop() }} style={linkStyles} to='/shipping_delivery'>
                                <li>Shipping & Delivery</li>
                            </Link>
                            <Link onClick={() => { scrollToTop() }} style={linkStyles} to='/secure_payment'>
                                <li>Secure Payment</li>
                            </Link>
                            <li>Guarantee</li>
                            <li>Terms & Conditions</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
                <div className='content4'>
                    <div className='fc-c4-container'>
                        <div>
                            <i class="fas fa-map-marker-alt"></i><span>Glasgow D04 89GR</span>
                        </div>
                        <div>
                            <i class="fas fa-phone-alt"></i><span>(123) 456-7890</span>
                        </div>
                        <div>
                            <i class="far fa-clock"></i><span>7 days a week from 9:00 am to 7:00 pm</span>
                        </div>
                        <div>
                            <i class="far fa-envelope"></i><span>info@demolink.org</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const linkStyles = {
    'textDecoration': 'none',
    'color': '#7d7d7d'
}