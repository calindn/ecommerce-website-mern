import React, { useState } from 'react'
import FooterComponent from '../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../LandingPage/CopyrightComponent/CopyrightComponent'
import Categories from './Categories/Categories'
import FilterBy from './FilterBy/FilterBy'
import './Shop.css'
import SelectList from './SelectList/SelectList'

import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import NavigationHistory from './NavigationHistory/NavigationHistory'
import ProductCategory from '../LandingPage/CategoryList/ProductCategory/ProductCategory'

import Product from '../LandingPage/NewProductsList/Product/Product'

import product_img1 from '../LandingPage/MainImageSlider/assets/product_img1.jpg'
import product_img2 from '../LandingPage/MainImageSlider/assets/product_img2.jpg'
import product_img3 from '../LandingPage/MainImageSlider/assets/product_img3.jpg'
import product_img4 from '../LandingPage/MainImageSlider/assets/product_img4.jpg'
import product_img5 from '../LandingPage/MainImageSlider/assets/product_img5.jpg'
import product_img6 from '../LandingPage/MainImageSlider/assets/product_img6.jpg'
import product_img7 from '../LandingPage/MainImageSlider/assets/product_img7.jpg'
import product_img8 from '../LandingPage/MainImageSlider/assets/product_img8.jpg'



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Shop() {
    const classes = useStyles();

    const [categoryName, setCategoryName] = useState('Laptops');
    const [initialCount, setInitialCount] = useState(0);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [pageNr, setPageNr] = useState(1);

    const categoryList = ['Mac', 'Laptops', 'Desktop PCs', 'Printers', 'Smart Tech', 'Networking', 'Tablets'];
    const infoList = ['About Us', 'Customer Service', 'Shipping Delivery', 'Secure Payment', 'Guarantee', 'Terms & Conditions', 'Privacy Policy', 'Contact Us'];
    const showListValues = [10, 20, 30];
    const sortByValues = ['Oldest First', 'Newest First', 'Price: Low to High', 'Price: High to Low', 'Name: A-Z', 'Name: Z-A'];


    const updateProps = (value) => {

        console.log('-----');
        if (!isNaN(parseInt(value))) {
            setInitialCount(value);
        } else {
            setSelectedFilter(value);
        }
    }

    const changePage = (page) => {
        setPageNr(page);
    }

    return (

        <div className='shop-contner'>
            <div>
                <NavigationHistory path='Samsung,Iphone 10' />
            </div>
            <div className='category-name-heading'>{categoryName}</div>
            <div className='shop-wrapper'>
                <div className='aside-container'>
                    <div className='categories-container'>
                        <Categories label='CATEGORIES' list={categoryList} />
                    </div>
                    <div className='fltrby-container'>
                        <FilterBy />
                    </div>
                    <div className='information-container'>
                        <Categories label='INFORMATION' list={infoList} />
                    </div>
                </div>
                <div className='shop-main-container'>
                    <div className='view-criterias'>
                        <div className='showq-container'>
                            <SelectList initialValue={initialCount} updateProps={updateProps} label='Show' values={showListValues} />
                        </div>
                        <div className='sortby-container'>
                            <SelectList initialValue={selectedFilter} updateProps={updateProps} label='Sort By' values={sortByValues} />
                        </div>
                        <Pagination
                            id='pagination-component'
                            page={pageNr}
                            onChange={(event, page) => { changePage(page) }}
                            count={5}
                            variant="outlined"
                            shape="rounded"
                        />
                    </div>
                    <div className='shop-prod-container'>
                        <div className='p-item'>
                            <Product src={product_img1} text='Silicone Case for iPad mini' price='$45.00' />
                        </div>
                        <div className='p-item'>
                            <Product src={product_img2} text='Silicone Case for iPad mini' price='$45.00' />
                        </div>
                        <div className='p-item'>
                            <Product src={product_img3} text='Silicone Case for iPad mini' price='$45.00' />
                        </div>
                        <div className='p-item'>
                            <Product src={product_img4} text='Silicone Case for iPad mini' price='$45.00' />
                        </div>
                        <div className='p-item'>
                            <Product src={product_img5} text='Silicone Case for iPad mini' price='$45.00' />
                        </div>
                        <div className='p-item'>
                            <Product src={product_img6} text='Silicone Case for iPad mini' price='$45.00' />
                        </div>
                        <div className='p-item'>
                            <Product src={product_img7} text='Silicone Case for iPad mini' price='$45.00' />
                        </div>
                        <div className='p-item'>
                            <Product src={product_img8} text='Silicone Case for iPad mini' price='$45.00' />
                        </div>
                    </div>
                    <div className='view-criterias-down'>
                        <div className='showq-container-down'>
                            <SelectList initialValue={initialCount} updateProps={updateProps} label='Show' values={showListValues} />
                        </div>
                        <div className='sortby-container-down'>
                            <SelectList initialValue={selectedFilter} updateProps={updateProps} label='Sort By' values={sortByValues} />
                        </div>
                        <Pagination
                            id='pagination-component'
                            page={pageNr}
                            onChange={(event, page) => { changePage(page) }}
                            count={5}
                            variant="outlined"
                            shape="rounded"
                        />
                    </div>
                </div>
            </div>
            <div id='footer-cpyright-container'>
                <div>
                    <FooterComponent />
                </div>
                <div>
                    <CopyrightComponent />
                </div>
            </div>
        </div>
    );
}
