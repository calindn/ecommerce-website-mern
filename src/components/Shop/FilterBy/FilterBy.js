import React from 'react'
import './FilterBy.css'
import Checkbox from '@material-ui/core/Checkbox';

export default function FilterBy({ handleFilterByClick, handleClear }) {

    let brandList = ['Apple', 'Samsung', 'Xiaomi', 'Huawei', 'Sony'];
    let initialValuesCheckedArr = [];
    for (let i = 0; i < brandList.length; i++)
        initialValuesCheckedArr.push(false);
    const [checkedValue, setChecked] = React.useState(initialValuesCheckedArr);



    const showBrands = () => {
        let bl = document.getElementById('brand-list');
        let arrow = document.querySelector('.arrow-down-i');
        console.log(bl.style.display);
        if (bl.style.display == '' || bl.style.display === 'none') {
            arrow.style.transform = 'rotate(180deg)';
            bl.style.display = 'block';
        } else {
            arrow.style.transform = '';
            bl.style.display = 'none';
        }
    }
    const handleApplyBtnClick = (e) => {
        let priceRange = [];
        priceRange[0] = document.getElementById('min-price').value;
        priceRange[1] = document.getElementById('max-price').value;

        let selectedBrands = [];
        document.querySelectorAll('.checkbox-container-brands span input').forEach((item) => {
            if (item.checked === true) {
                let idx = parseInt(item.id);
                selectedBrands.push(brandList[idx]);
            }
        })

        handleFilterByClick(priceRange, selectedBrands);
    }

    const handleClearBtnClick = () => {
        document.getElementById('min-price').value = '';
        document.getElementById('max-price').value = '';

        document.querySelectorAll('.checkbox-container-brands span input').forEach((item) => {
            if (item.checked === true)
                item.checked = false;

        })
        setChecked(initialValuesCheckedArr)
        handleClear();

    }

    const toggleCheckbox = (e) => {
        const idx = e.target.id;
        let arr = [...checkedValue];
        arr[idx] = !arr[idx];
        setChecked(arr);
    }



    return (
        <div className='filterby-container'>
            <div className='filterby-label'>
                FILTER BY
            </div>
            <div className='filter-body'>
                <div className='price-container'>
                    <div className='price-label'>Price</div>
                    <div className='range-price'>
                        <input type='number' placeholder='Min' id='min-price' min='0' step='5' />
                        <span>-</span>
                        <input type='number' placeholder='Max' id='max-price' step='5' />
                    </div>
                </div>
                <div className='brands-container'>
                    <div onClick={() => showBrands()} className='brands-label'>Brands</div>
                    <div onClick={() => showBrands()} className='arrow-down-i'><i class="fas fa-chevron-down"></i></div>
                    <div id='brand-list'>
                        {
                            brandList.map((item, key) => {
                                return (
                                    <div key={key} style={{ 'display': 'flex', 'align-items': 'center' }}>
                                        <Checkbox
                                            checked={checkedValue[key]}
                                            id={key}
                                            className='checkbox-container-brands '
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            onChange={toggleCheckbox}
                                        />
                                        <div>{item}</div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <div className='fb-action-btns'>
                    <button onClick={(e) => { handleApplyBtnClick(e) }}>Apply</button>
                    <button id='checkbox-clear-btn' onClick={() => { handleClearBtnClick() }}>Clear</button>
                </div>

            </div>

        </div>
    )
}
