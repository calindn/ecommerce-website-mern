import React from 'react'
import './ShippingDelivery.css'

import FooterComponent from '../../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../../LandingPage/CopyrightComponent/CopyrightComponent'

export default function ShippingDelivery() {
    return (
        <div className='shipping-delivery-container'>
            <div className='h1-sd'>
                SHIPPING & DELIVERY
            </div>

            <div className='sd-ptext1'>
                So you’ve done your shopping; just how long will it be till you can rock
                that swanky new Axolotl-themed laptop skin? The calculator below will give you
                the average amount of days it takes to ship a product to your door and the best
                time to contact our support team. Please note that every order at Redbubble is
                custom printed just for you, and will take 1-3 business days to print prior to shipping.
            </div>
            <div className='list-wrapper'>
                <div className='sd-h4-1'>
                    HERE ARE A FEW THINGS TO CONSIDER WHILE YOU WAIT FOR YOUR ORDER
                </div>
                <div className='list'>
                    <ul>
                        <li>We ship in business days. Monday - Friday, excluding national holidays.</li>
                        <li>Shipping starts from the date you received the “Your Order Has Shipped!” email.</li>
                        <li>The estimate above does not include manufacturing time - we need 1-3 business days to make sure your custom order is everything you hoped it would be.</li>
                    </ul>
                </div>
                <div className='sd-ptext2'>
                    Redbubble is a global company - we work with production and shipping partners
                    all over the world to get your things to your doorstep, wherever that may be.
                    Although the vast majority of our customers will get their orders by the day listed above,
                    actual timeframes may vary from region to region.
                </div>
            </div>


            <div className='sd-contact-redbubble'>
                <div className='sd-h4-2'>
                    SO WHEN DO YOU CONTACT REDBUBBLE?
                </div>
                <div className='sd-ptext3'>
                    The calculator above lets you know the best time to message us. When that day rolls around.
                    Even if your order hasn’t arrived by the listed date, it’s probably still on its way (and worth the wait).
                </div>
            </div>


            <div className='sd-hrow'></div>

            <div className='sd-ptext4-wrapper'>
                <div className='sd-h4-3'>
                    <i class="fas fa-truck"></i>
                    <span>HOW MUCH IS SHIPPING?</span>
                </div>
                <div className='sd-ptext4'>
                    Once you’ve clicked through to Secure Checkout, you can
                    enter your delivery address and choose a shipping method.
                    Shipping costs are then calculated and tacked on to your
                    subtotal at the bottom of the page.
                </div>
            </div>
            {/*  */}
            <div className='sd-ptext5-wrapper'>
                <div className='sd-h4-4'>
                    <i class="fas fa-search"></i>
                    <span>CAN I TRACK MY ORDER?</span>
                </div>
                <div className='sd-ptext5'>
                    We rely on a global network of shipping partners (UPS, FedEx, DHL) as
                    well as local postal services (USPS) to get your order to your doorstep as soon as possible.
                    For this reason, tracking is not always available. If your order is being sent by a trackable
                    service, these details will be included on your orders page as well as on the shipping
                    email we send you.
                </div>
            </div>

            <div className='sd-ptext6-wrapper'>
                <div className='sd-h4-5'>
                    <i class="far fa-calendar-check"></i>
                    <span>WHERE DOES MY ORDER SHIP FROM?</span>
                </div>
                <div className='sd-ptext6'>
                    We rely on a global network of shipping partners (UPS, FedEx, DHL)
                    as well as local postal services (USPS) to get your order to your doorstep as soon as possible.
                    For this reason, tracking is not always available. If your order is being sent by a trackable service,
                    these details will be included on your orders page as well as on the shipping email we send you.
                </div>
            </div>

            <div className='sd-footer-copyright'>
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
