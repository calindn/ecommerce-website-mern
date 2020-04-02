import React, { useState, Fragment } from 'react'
import FooterComponent from '../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../LandingPage/CopyrightComponent/CopyrightComponent'
import Categories from './Categories/Categories'
import FilterBy from './FilterBy/FilterBy'
import './Shop.css'
import SelectList from './SelectList/SelectList'
import ImageGallery from 'react-image-gallery';

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

export default function Shop({ initalCategory }) {
    const classes = useStyles();

    const [categoryName, setCategoryName] = useState('Laptops');
    const [selectedFilter, setSelectedFilter] = useState('');
    const [pageNr, setPageNr] = useState(1);
    const [index, setIndex] = useState(0);
    let [prodArr, setProdArr] = useState([]);

    const categoryList = ['Mac', 'Laptops', 'Desktop PCs', 'Printers', 'Smart Tech', 'Networking', 'Tablets'];
    const infoList = ['About Us', 'Customer Service', 'Shipping Delivery', 'Secure Payment', 'Guarantee', 'Terms & Conditions', 'Privacy Policy', 'Contact Us'];
    const sortByValues = ['Oldest First', 'Newest First', 'Price: Low to High', 'Price: High to Low', 'Name: A-Z', 'Name: Z-A'];

    const originalProdArr = [
        <div className='p-item'>
            <Product src={product_img1} text='Silicone Case for iPad mini Xiaomi' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img2} text='Silicone Case for iPad mini samsung' price='$1.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img3} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img4} text='Ailicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img5} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img6} text='Salicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img7} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img8} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img8} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img1} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img2} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img3} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img4} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img5} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img6} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img7} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img8} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img8} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img1} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img2} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img3} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img4} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img5} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img6} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img7} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img8} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img8} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img5} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img6} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img7} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img8} text='Silicone Case for iPad mini' price='$45.00' />
        </div>,
        <div className='p-item'>
            <Product src={product_img8} text='Silicone Case for iPad mini' price='$555.00' />
        </div>

    ];


    // nr of products of category x 
    const nrProds = originalProdArr.length;


    const updateProps = (value) => {
        // console.log(originalProdArr[0].props.children.props.text);

        const sortStringsCmp = (a, b) => {
            if (a.props.children.props.text < b.props.children.props.text) {
                return -1;
            }
            if (a.props.children.props.text > b.props.children.props.text) {
                return 1;
            }
            return 0;
        }

        prodArr = [...originalProdArr];
        switch (value) {
            case 'Price: Low to High':
                prodArr.sort((item1, item2) => {
                    let price1 = parseFloat(item1.props.children.props.price.slice(1));
                    let price2 = parseFloat(item2.props.children.props.price.slice(1));
                    return price1 - price2;

                });
                setProdArr(prodArr);
                break;
            case 'Price: High to Low':
                prodArr.sort((item1, item2) => {
                    let price1 = parseFloat(item1.props.children.props.price.slice(1));
                    let price2 = parseFloat(item2.props.children.props.price.slice(1));
                    return price2 - price1;

                });
                setProdArr(prodArr);
                break;
            case 'Name: A-Z':
                prodArr.sort(sortStringsCmp);
                setProdArr(prodArr);
                break;
            case 'Name: Z-A':
                prodArr.sort(sortStringsCmp).reverse();
                setProdArr(prodArr);
                break;
            default:
                break;
        }

        setSelectedFilter(value);

    }

    const changePage = (page) => {
        setPageNr(page);
        setIndex(page * 9 - 9);
        // display from array of products: prodArr[idx, idx+8]

    }

    const handleCategoryClick = (e) => {
        if (e.target.style.color !== 'rgb(30, 136, 229)') {
            setCategoryName(e.target.textContent)
            let items = document.querySelector('#categories-list').childNodes
            items.forEach((item) => {
                item.style.color = '#727171';
                item.style.backgroundColor = '#ffffff';
            });
            e.target.style.color = 'rgb(30, 136, 229)';
            e.target.style.backgroundColor = 'rgb(233, 233, 233)';
        }

    }
    const handleFilterByClick = (priceRange, selectedBrands) => {
        let prods = originalProdArr.filter((item) => {
            let price = parseFloat(item.props.children.props.price.slice(1));
            let str = item.props.children.props.text.split(' ');
            let brandName = str[str.length - 1];

            let sbNew = selectedBrands.map((item) => item.toLowerCase());
            console.log(sbNew);
            console.log('includes ', sbNew.includes(brandName.toLowerCase()));

            return price >= priceRange[0] && price <= priceRange[1] && sbNew.includes(brandName.toLowerCase());
        });
        setProdArr(prods);
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
                        <Categories handleCategoryClick={handleCategoryClick} selectedCategory={initalCategory} label='CATEGORIES' list={categoryList} />
                    </div>
                    <div className='fltrby-container'>
                        <FilterBy handleFilterByClick={handleFilterByClick} />
                    </div>
                    <div className='information-container'>
                        <Categories label='INFORMATION' list={infoList} />
                    </div>
                </div>
                <div className='shop-main-container'>
                    <div className='view-criterias'>
                        <div className='sortby-container'>
                            <SelectList initialValue={selectedFilter} updateProps={updateProps} label='Sort By' values={sortByValues} />
                        </div>
                        <Pagination
                            id='pagination-component'
                            page={pageNr}
                            onChange={(event, page) => { changePage(page) }}
                            count={Math.ceil(nrProds / 9)}
                            variant="outlined"
                            shape="rounded"
                        />
                    </div>
                    <div className='shop-prod-container'>
                        {
                            categoryName === 'Mac' ?

                                (<Fragment>
                                    {prodArr.map((item, idx) => {
                                        return idx >= index && idx <= index + 8 ? item : null
                                    })}

                                </Fragment>
                                )
                                :
                                (<Fragment>
                                    {prodArr.map((item, idx) => {
                                        return idx >= index && idx <= index + 8 ? item : null
                                    })}
                                </Fragment>
                                )
                        }
                    </div>
                    <div className='view-criterias-down'>

                        <div className='sortby-container-down'>
                            <SelectList initialValue={selectedFilter} updateProps={updateProps} label='Sort By' values={sortByValues} />
                        </div>
                        <Pagination
                            id='pagination-component'
                            page={pageNr}
                            onChange={(event, page) => { changePage(page) }}
                            count={Math.ceil(nrProds / 9)}
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
