import React, { Component } from 'react'

import './Categories.css'

export default class Categories extends Component {
    render() {
        return (
            <div className='categories-container'>
                <div className='categories-label'>CATEGORIES</div>
                <div className='category-list'>
                    <ul>
                        <li>
                            Mac
                        </li>
                        <li>
                            Laptops
                        </li>
                        <li>
                            Desktop PCs
                        </li>
                        <li>
                            Printers
                        </li>
                        <li>
                            Smart Tech
                        </li>
                        <li>
                            Networking
                        </li>
                        <li>
                            Tablets
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}
