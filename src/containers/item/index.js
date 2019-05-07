import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import * as R from 'ramda'

import {fetchItemById, editNameAction} from '../../actions'
import {getItemByIdSelector} from '../../selectors'

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

const renderContent = (item, editNameAction) => {
  const editName = () => {
    console.log('edit click')
    editNameAction()
  }
  return (
      <div className='thumbnail'>
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
                {renderFields(item)}
            </div>
          </div>
          <div className='caption-full'>
            <h4>{item.name}</h4>
            <button
            onClick={editName}
            className='btn btn-primary'>
                Edit
            </button>
            <p>{item.destination}</p>
          </div>
      </div>
    )
}

const Item = ({item, editNameAction, fetchItemById, params}) => {
  useEffect(() => {
    fetchItemById(params.id)
  }, [])
  return (
  <div className='view-container'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-10 offset-md-1'>
          {item && renderContent(item, editNameAction)}
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