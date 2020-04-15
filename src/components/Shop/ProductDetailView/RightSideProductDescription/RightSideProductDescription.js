import React from 'react'
import './RightSideProductDescription.css'

import SelectList from '../../SelectList/SelectList'
import Product from '../../../LandingPage/NewProductsList/Product/Product'
import product_img1 from '../../../LandingPage/MainImageSlider/assets/product_img1.jpg'

import FooterComponent from '../../../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../../../LandingPage/CopyrightComponent/CopyrightComponent'
import InfoTable from './InfoTable/InfoTable'

export default function RightSideProductDescription(state) {

    const valuesMaterial = ['Silicone', 'Leather'];
    const valuesDiagonal = ['5.5 Inch', '4.7 Inch'];
    const valuesPattern = ['Animal', 'Solid', 'Flowers'];

    const { src, price, brandName, listaAtribute, text, categorie, descriere } = state;
    return (
        <div className='rside-prod-desc-container'>
            <section className='section1'>
                <div className='brand'>Brand:    <span>{brandName}</span></div>
                <div className='sku'>SKU:     <span>SKU_12323_@3</span></div>
                <div className='rspd-title'><h1>{text}</h1></div>
                <div className='rspd-price'>{price}</div>
                <div className='hrow'></div>
            </section>
            <section className='section2'>


                <div className='add-to-cart-wrapper'>
                    <button>
                        <i class="fas fa-cart-plus"></i>
                        <span>Add to cart</span>
                    </button>
                </div>
            </section>
            <section className='details'>
                <div className='details-lbl'>Detalii</div>
                <div className='d-hr'></div>
                <div className='content'>
                    {
                        listaAtribute.map((grup) => {
                            return <InfoTable numeGrup={grup.numeGrup} atributeGrup={grup.atribute_grup} />
                        })
                    }
                </div>
            </section>
            <section className='related-section'>
                <div className='rel-prod-lbl'>RELATED PRODUCTS</div>
                <div className='rel-prods'>
                    {/* <div>
                        <Product toHideButton={true} src={product_img1} text='Silicone Case for iPad mini Xiaomi' price='$45.00' />
                    </div>
                    <div>
                        <Product toHideButton={true} src={product_img1} text='Silicone Case for iPad mini Xiaomi' price='$45.00' />
                    </div>
                    <div>
                        <Product toHideButton={true} src={product_img1} text='Silicone Case for iPad mini Xiaomi' price='$45.00' />
                    </div>
                    <div>
                        <Product toHideButton={true} src={product_img1} text='Silicone Case for iPad mini Xiaomi' price='$45.00' />
                    </div> */}
                </div>
            </section>
            <div className='rspd-footer-cpyright'>
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
