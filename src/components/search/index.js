import React, { useState } from 'react'
import {connect} from 'react-redux';
import {searchItem} from '../../store/actions'

const handleSubmit = (event, value, searchItem) => {
    event.preventDefault();
    searchItem(value)
}

const Search = ({searchItem}) => {
    const [value, setValue] = useState('')
    const updateValue = (event) => {
        setValue(event.target.value)
    }
    return (
        <div>
        <div className='well blosd'>
            <h3 className='lead'>Search</h3>
            <form onSubmit={(event) => handleSubmit(event, value, searchItem)}>
                <input
                onChange={(event) => updateValue(event)}
                type='text'
                className='form-control'
                />
            </form>
        </div>
        </div>
    )
}

export default connect(
() => {return {}}, {
    searchItem
})(Search)
