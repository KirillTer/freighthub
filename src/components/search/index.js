import React from 'react'
import {withStateHandlers} from 'recompose';
import {connect} from 'react-redux';
import {searchItem} from '../../actions/'

const handleSubmit = (event, value, searchItem) => {
    console.log('!', value)
    event.preventDefault();
    searchItem(value)
}

const Search = withStateHandlers(
    ({ initialValue = '' }) => ({
        value: initialValue,
      }),
      {
        setValue: ({value}) => (val) => ({
            value: val.target.value,
        }),
      })(
    ({value, setValue, searchItem}) => {
    return (
        <div>
        <div className='well blosd'>
            <h3 className='lead'>Search</h3>
            <form onSubmit={(event) => handleSubmit(event, value, searchItem)}>
                <input
                onChange={(event) => setValue(event)}
                type='text'
                className='form-control'
                />
            </form>
        </div>
        </div>
    )
})

export default connect(
(state: AppState) => {
    return {}
}, {
    searchItem
})(Search)
