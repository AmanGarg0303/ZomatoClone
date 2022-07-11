import React from 'react'
import './filteritem.css'

const FilterItem = ({ filter }) => {
    return (
        <div className='filter-item cur-po'>
            {filter.icon && filter.icon}
            <div className="filter-name">{filter.title}</div>
        </div>
    )
}

export default FilterItem
