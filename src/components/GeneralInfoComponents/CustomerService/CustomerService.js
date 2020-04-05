import React from 'react'
import './CustomerService.css'


import FooterComponent from '../../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../../LandingPage/CopyrightComponent/CopyrightComponent'

export default function CustomerService() {
    return (
        <div className='customer-service-container'>
            <div className='h1-cs'>
                CUSTOMER SERVICE
            </div>
            <div className='h4-txt1'>
                DELIVERY
            </div>
            <div className='p-txt1'>
                <p className='text1'>
                    HELLO AND WELCOME TO THE SHIPPING AND DELIVERY INFORMATION PAGE! HERE YOU CAN GET
                    ACQUAINTED WITH USEFUL INFORMATION ON TERMS AND CONDITIONS OF OUR GOODS DELIVERY
                </p>
            </div>
            <div className='p-txt2'>
                <p className='text2'>
                    You can purchase your items online and pick them up at our street store, or ship them directly to your doorstep.
                    Shipping is free on some orders. We use the best carriers in the business to make sure your order gets to you on time.
                    From the Secure Checkout page you'll see your item description, price and delivery timing. Where available,
                    you can also choose a faster delivery method for each item on your order, for an additional fee.
                    Delivery times vary according to your selected delivery address, availability of your items and the time of day you
                    place your order.
                </p>
            </div>
            <div className='h4-txt2'>
                COST
            </div>
            <div className='cost-table'>
                <table>
                    <tr>
                        <th><span>Services</span></th>
                        <th><span>Locations</span></th>
                        <th><span>Delivery Schedule</span></th>
                        <th><span>Cost Per Shipment</span></th>
                    </tr>
                    <tbody>

                        <tr>
                            <td>Royal mail 1st Class Service (Order value $20 or less)</td>
                            <td>All of UK & some European Countries</td>
                            <td>1-3 days Monday - Saturday</td>
                            <td>$5</td>
                        </tr>
                        <tr>
                            <td>Royal mail Tracker (Order value $50 or less)</td>
                            <td>All of UK</td>
                            <td>1-3 days Delivery 7.30am - 5.30am Monday - Friday</td>
                            <td>$45</td>
                        </tr>
                        <tr>
                            <td>Standard Courier Delivery</td>
                            <td>UK mainland only</td>
                            <td>1-3 days Monday - Saturday</td>
                            <td>$124</td>
                        </tr>
                        <tr>
                            <td>Standard Courier Delivery</td>
                            <td>Northern Ireland, Eire, Scilly Isles</td>
                            <td>1-3 days Delivery 7.30am - 5.30am Monday - Friday</td>
                            <td>$11</td>
                        </tr>
                        <tr>
                            <td>Royal mail 1st Class Service (Order value $20 or less)</td>
                            <td>All of UK & some European Countries</td>
                            <td>1-3 days Monday - Saturday</td>
                            <td>$5</td>
                        </tr>
                        <tr>
                            <td>Priority courier pre 12pm Next Working Day</td>
                            <td>UK mainland only</td>
                            <td>1-3 days Delivery 7.30am - 5.30am Monday - Friday</td>
                            <td>$89</td>
                        </tr>
                        <tr>
                            <td>Royal mail 1st Class Service (Order value $20 or less)</td>
                            <td>All of UK & some European Countries</td>
                            <td>1-3 days Monday - Saturday</td>
                            <td>$72</td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <div className='h4-txt3'>
                FREE DELIVERY
            </div>
            <div className='p-txt3'>
                <p className='text3'>
                    Free two-day shipping is available on in-stock items. You can see in your bag if your item is in stock.
                    Free two-day shipping is not available on customized, engraved products, and for certain order types,
                    including orders paid for with financing or by bank transfer. To get free two-day shipping, you
                    will need to place your order by 5pm, Monday to Friday. For instance, if you order your goods before
                    5:00 pm, Monday to Friday we will deliver them in two business days.
                </p>
            </div>
            <div className='h4-txt4'>
                TERMS & CONDITIONS
            </div>
            <div className='terms-and-cond-wrapper'>
                <div className='entire-agreement-wrapper'>
                    <div className='heading'>
                        <i class="fas fa-check"></i>
                        <span>ENTIRE AGREEMENT</span>
                    </div>
                    <div className='txt'>
                        If you require a complete delivery of your orders, please enter an X in the
                        Complete Delivery field on the shipping screen of the customer master record.
                        The indicator is copied into the order header, which you can also use for the purpose.
                    </div>
                </div>
                <div className='entire-agreement-wrapper'>
                    <div className='heading'>
                        <i class="fas fa-check"></i>
                        <span>ENTIRE AGREEMENT</span>
                    </div>
                    <div className='txt'>
                        If you require a complete delivery of your orders, please enter an X in the
                        Complete Delivery field on the shipping screen of the customer master record.
                        The indicator is copied into the order header, which you can also use for the purpose.
                    </div>
                </div>
                <div className='controlling-terms-wrapper'>
                    <div className='heading'>
                        <i class="fas fa-check"></i>
                        <span>CONTROLLING TERMS</span>
                    </div>
                    <div className='txt'>
                        Buyer expressly agrees that Seller’s Invoice and these Terms and
                        Conditions of Sale represent the complete agreement of the parties
                        with respect to the sale of the product(s) listed on the Invoice and
                        no different or additional terms or conditions in Buyer’s purchase order
                        or in any other prior or subsequent communications in any way adding to,
                        modifying or otherwise changing these Terms and Conditions of Sale shall be binding upon Seller.
                    </div>
                </div>
                <div className='controlling-terms-wrapper'>
                    <div className='heading'>
                        <i class="fas fa-check"></i>
                        <span>CONTROLLING TERMS</span>
                    </div>
                    <div className='txt'>
                        Buyer expressly agrees that Seller’s Invoice and these Terms and
                        Conditions of Sale represent the complete agreement of the parties
                        with respect to the sale of the product(s) listed on the Invoice and
                        no different or additional terms or conditions in Buyer’s purchase order
                        or in any other prior or subsequent communications in any way adding to,
                        modifying or otherwise changing these Terms and Conditions of Sale shall be binding upon Seller.
                    </div>
                </div>
                <div className='entire-agreement-wrapper'>
                    <div className='heading'>
                        <i class="fas fa-check"></i>
                        <span>ENTIRE AGREEMENT</span>
                    </div>
                    <div className='txt'>
                        If you require a complete delivery of your orders, please enter an X in the
                        Complete Delivery field on the shipping screen of the customer master record.
                        The indicator is copied into the order header, which you can also use for the purpose.
                    </div>
                </div>
                <div className='entire-agreement-wrapper'>
                    <div className='heading'>
                        <i class="fas fa-check"></i>
                        <span>ENTIRE AGREEMENT</span>
                    </div>
                    <div className='txt'>
                        If you require a complete delivery of your orders, please enter an X in the
                        Complete Delivery field on the shipping screen of the customer master record.
                        The indicator is copied into the order header, which you can also use for the purpose.
                    </div>
                </div>
                <div className='controlling-terms-wrapper'>
                    <div className='heading'>
                        <i class="fas fa-check"></i>
                        <span>CONTROLLING TERMS</span>
                    </div>
                    <div className='txt'>
                        Buyer expressly agrees that Seller’s Invoice and these Terms and
                        Conditions of Sale represent the complete agreement of the parties
                        with respect to the sale of the product(s) listed on the Invoice and
                        no different or additional terms or conditions in Buyer’s purchase order
                        or in any other prior or subsequent communications in any way adding to,
                        modifying or otherwise changing these Terms and Conditions of Sale shall be binding upon Seller.
                    </div>
                </div>
                <div className='controlling-terms-wrapper'>
                    <div className='heading'>
                        <i class="fas fa-check"></i>
                        <span>CONTROLLING TERMS</span>
                    </div>
                    <div className='txt'>
                        Buyer expressly agrees that Seller’s Invoice and these Terms and
                        Conditions of Sale represent the complete agreement of the parties
                        with respect to the sale of the product(s) listed on the Invoice and
                        no different or additional terms or conditions in Buyer’s purchase order
                        or in any other prior or subsequent communications in any way adding to,
                        modifying or otherwise changing these Terms and Conditions of Sale shall be binding upon Seller.
                    </div>
                </div>
                <div className='entire-agreement-wrapper'>
                    <div className='heading'>
                        <i class="fas fa-check"></i>
                        <span>ENTIRE AGREEMENT</span>
                    </div>
                    <div className='txt'>
                        If you require a complete delivery of your orders, please enter an X in the
                        Complete Delivery field on the shipping screen of the customer master record.
                        The indicator is copied into the order header, which you can also use for the purpose.
                    </div>
                </div>
                <div className='entire-agreement-wrapper'>
                    <div className='heading'>
                        <i class="fas fa-check"></i>
                        <span>ENTIRE AGREEMENT</span>
                    </div>
                    <div className='txt'>
                        If you require a complete delivery of your orders, please enter an X in the
                        Complete Delivery field on the shipping screen of the customer master record.
                        The indicator is copied into the order header, which you can also use for the purpose.
                    </div>
                </div>
                <div className='controlling-terms-wrapper'>
                    <div className='heading'>
                        <i class="fas fa-check"></i>
                        <span>CONTROLLING TERMS</span>
                    </div>
                    <div className='txt'>
                        Buyer expressly agrees that Seller’s Invoice and these Terms and
                        Conditions of Sale represent the complete agreement of the parties
                        with respect to the sale of the product(s) listed on the Invoice and
                        no different or additional terms or conditions in Buyer’s purchase order
                        or in any other prior or subsequent communications in any way adding to,
                        modifying or otherwise changing these Terms and Conditions of Sale shall be binding upon Seller.
                    </div>
                </div>
                <div className='controlling-terms-wrapper'>
                    <div className='heading'>
                        <i class="fas fa-check"></i>
                        <span>CONTROLLING TERMS</span>
                    </div>
                    <div className='txt'>
                        Buyer expressly agrees that Seller’s Invoice and these Terms and
                        Conditions of Sale represent the complete agreement of the parties
                        with respect to the sale of the product(s) listed on the Invoice and
                        no different or additional terms or conditions in Buyer’s purchase order
                        or in any other prior or subsequent communications in any way adding to,
                        modifying or otherwise changing these Terms and Conditions of Sale shall be binding upon Seller.
                    </div>
                </div>
            </div>

            <div className='cs-footer-copyright'>
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
