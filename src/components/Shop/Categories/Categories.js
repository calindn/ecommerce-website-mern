import React, { Component } from 'react'

import './Categories.css'

export default class Categories extends Component {
    render() {
        return (
            <div className='categories-container'>
                <div className='categories-label'>{this.props.label}</div>
                <div className='category-list'>

                    <ul>
                        {
                            this.props.list.map((item) => {
                                return <li>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
