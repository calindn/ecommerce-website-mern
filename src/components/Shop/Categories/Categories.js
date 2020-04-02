import React, { Component } from 'react'

import './Categories.css'

export default class Categories extends React.Component {
    render() {
        let idName = this.props.label.toLowerCase() + '-list';
        return (
            <div className='categories-container'>
                <div className='categories-label'>{this.props.label}</div>
                <div className='category-list'>

                    <ul id={idName} >
                        {
                            this.props.list.map((item, key) => {
                                if (item === this.props.selectedCategory) {
                                    return <li onClick={(e) => { return this.props.label === 'CATEGORIES' ? this.props.handleCategoryClick(e) : null }} key={key} style={{ 'color': '#1e88e5', 'background-color': '#e9e9e9' }}>{item}</li>
                                } else {
                                    return <li onClick={(e) => { return this.props.label === 'CATEGORIES' ? this.props.handleCategoryClick(e) : null }} key={key}>{item}</li>
                                }
                            })
                        }
                    </ul>
                </div >
            </div >
        )
    }
}
