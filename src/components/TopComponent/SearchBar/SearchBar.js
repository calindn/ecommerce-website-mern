import React from 'react'
import './SearchBar.css'

export default function SearchBar() {
    return (
        <div className='searchbar-container'>
            <label>
                <input type='text' />
                <i class="fas fa-search"></i>
            </label>
        </div>
    )
}
