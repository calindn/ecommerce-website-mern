import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationHistory.css'

export default function NavigationHistory({ path }) {
    // const path = 'Mac, Silicone Case for iPad mini'
    const arr = path.split(',');

    return (
        <div className='nh-container'>
            <div className='home-link'>Home</div>
            {
                arr.map((item) => {
                    let l = '/' + item.toLowerCase().split(' ').join('_')
                    return (
                        <Link style={{ textDecoration: 'none' }} to={l} >
                            <div className='nh-item'>{item}</div>
                        </Link>
                    )
                })
            }
        </div >
    )
}
