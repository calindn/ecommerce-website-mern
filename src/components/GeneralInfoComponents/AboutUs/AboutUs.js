import React from 'react'

import FooterComponent from '../../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../../LandingPage/CopyrightComponent/CopyrightComponent'

import './AboutUs.css'

export default function AboutUs() {
    return (
        <div className='aboutus-container'>
            <div className='h1-aboutus'>
                <h1>ABOUT US </h1>
            </div>
            <div className='h4-txt'>
                <h4>Catering to your requirements, handling your needs with care</h4>
            </div>
            <div className='p-txt'>
                <p className='text'>Our store is more than just another average online retailer. We sell not only top quality products, but give our customers a positive online shopping experience. Forget about struggling to do everything at once: taking care of the family, running your business, walking your dog, cleaning the house, doing the shopping, etc. Purchase the goods you need every day or just like in a few clicks or taps, depending on the device you use to access the Internet. We work to make your life more enjoyable.</p>
            </div>
            <div className='stats'>
                <div id='products-avlbl'>
                    <div>
                        14500
                    </div>
                    <div>
                        PRODUCTS AVAILABLE
                    </div>
                </div>
                <div id='comeback-clt-percentg'>
                    <div>
                        81%
                    </div>
                    <div>
                        CLIENTS COME BACK
                    </div>
                </div>
                <div id='sitemembers'>
                    <div>
                        10 mlns
                    </div>
                    <div>
                        SITE MEMBERS
                    </div>
                </div>
            </div>
            <div className='au-hrow'>

            </div>

            <div className='store-events-wrapper'>
                <div className='lbl'>STORE EVENTS</div>
                <div className='store-events'>
                    <div className='st-ev-1'>
                        <div className='stev1-icon-wrapper'>
                            <i class="fas fa-search"></i>
                        </div>
                        <div className='heading-txt'>
                            FOR CONVENIENCE OF CHOICE
                        </div>
                        <div className='txt'>
                            We think about the convenience of your choice. Our products are supplied with star rating that should help hesitant buyers to take a decision. What’s more, you can search our site if you know exactly what you are looking for or use a bunch of different filters that will considerably save your time and efforts.
                        </div>
                    </div>
                    <div className='st-ev-2'>
                        <div className='stev2-icon-wrapper'>
                            <i class="fas fa-car"></i>
                        </div>
                        <div className='heading-txt'>
                            DELIVERY TO ALL REGIONS
                        </div>
                        <div className='txt'>
                            We deliver our goods worldwide. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be.
                        </div>
                    </div>
                    <div className='st-ev-3'>
                        <div className='stev3-icon-wrapper'>
                            <i class="fas fa-thumbs-up"></i>
                        </div>
                        <div className='heading-txt'>
                            THE HIGHEST QUALITY OF PRODUCTS
                        </div>
                        <div className='txt'>
                            We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.
                        </div>
                    </div>
                </div>
            </div>
            <div className='au-hrow2'></div>
            <div className='testimonials-wrapper'>
                <div className='lbl'>TESTIMONIALS</div>
                <div className='tquotes-icon'><i class="fas fa-quote-right"></i></div>
                <div className='testimonials'>
                    <div>
                        <div className='name'>EDNA BARTON</div>
                        <div className='commentary'>
                            Having the distressing experience with some online shops before decided
                            to say ‘’thank you” to all personnel of this store. You are not only friendly,
                            but deliver really good products in the shortest possible terms. In a word,
                            i am absolutely happy with my purchase and the service. Everything was perfect!
                        </div>
                    </div>
                    <div>
                        <div className='name'>ROBERT JOHNSON</div>
                        <div className='commentary'>
                            Guys, you rock! Made a purchase at your store recently. The order has been
                            shipped and delivered on time. The quality is superb! The price is quite
                            reasonable. Told all my friends about your excellent service and the variety
                            of choice. I think i’ll be your loyal customer in future as well. I wish your
                            store many more years of prosperity.
                        </div>
                    </div>
                    <div>
                        <div className='name'>JESSICA PRISTON</div>
                        <div className='commentary'>
                            Having the distressing experience with some online shops before decided
                            to say ‘’thank you” to all personnel of this store. You are not only friendly,
                            but deliver really good products in the shortest possible terms.
                            In a word, i am absolutely happy with my purchase and the service.
                            Everything was perfect!
                        </div>
                    </div>
                </div>
            </div>
            <div className='au-footer-copyright'>
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
