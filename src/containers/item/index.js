import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import * as R from 'ramda'

import {fetchItemById, editNameAction} from '../../store/actions'
import {getItemByIdSelector} from '../../store/selectors'

const renderFields = (item) => {
    const columnFields = R.compose(
        R.toPairs,
        R.pick([
          'mode',
          'type',
          'origin',
          'destination',
          'total',
          'status',
          'userId'
        ])
      )(item)
    return columnFields.map(([key, value]) => (
    <div className='column' key={key}>
        <div className='ab-details-title'>
        <p>{key}</p>
        </div>
        <div className='ab-details-info'>
        {value}
        </div>
    </div>
    ))
}

const renderContent = (item, editNameAction, edit, setEdit, name, setName) => {
  const editName = (event) => {
    event.preventDefault()
    event.persist()
    console.log('edit click - ', name)
    if (edit) {
      editNameAction(item.id, name)
    }
    setEdit(!edit)
  }
  const updateValue = (event) => {
    setName(event.target.value)
    console.log('input - ', name)
  }
  return (
      <div className='thumbnail'>
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
                {renderFields(item)}
            </div>
          </div>
          <div className='caption-full'>
              <form  className='col-md-10 row'>
                {edit ?
                  <input
                    className='offset-md-1 border'
                    onChange={(event) => updateValue(event)}
                    placeholder={item.name}>
                  </input> :
                  <h4 className='offset-md-1'>{item.name}</h4>}
                <button
                onClick={(event) => editName(event)}
                className='btn btn-primary offset-md-1'>
                    {edit ? 'Save' : 'Edit'}
                </button>
              </form>
          </div>
      </div>
    )
}

const Item = ({item, editNameAction, fetchItemById, params}) => {
  const [edit, setEdit] = useState(false)
  const [name, setName] = useState('')
  useEffect(() => {
    fetchItemById(params.id)
  }, [])
  return (
  <div className='view-container'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-10 offset-md-1'>
          {item && renderContent(item, editNameAction, edit, setEdit, name, setName)}
        </div>
      </div>
    </div>
  </div>
  )
}

export default connect((state: AppState) => {
return ({
    item: getItemByIdSelector(state, state.itemPage.id)
});
}, {
    fetchItemById,
    editNameAction
})(Item)