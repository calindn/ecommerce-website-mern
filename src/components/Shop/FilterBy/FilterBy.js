import React from 'react'
import './FilterBy.css'
import Checkbox from '@material-ui/core/Checkbox';

export default function FilterBy() {

    const [checked, setChecked] = React.useState(false);

    const handleChange = event => {
        setChecked(event.target.checked);
    };

    let brandList = ['Apple', 'Samsung', 'Xiaomi', 'Huawei', 'Sony'];

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
                            brandList.map((item) => {
                                return (
                                    <div style={{ 'display': 'flex', 'align-items': 'center' }}>
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                        <div>{item}</div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <div className='fb-action-btns'>
                    <button>Apply</button>
                    <button>Clear</button>
                </div>

            </div>

        </div>
    )
}
