import React from 'react'
import {compose, lifecycle} from 'recompose';
import { connect } from 'react-redux';
import * as R from 'ramda'

import {fetchPhoneById, editNameAction} from '../../actions/'
import {getPhoneByIdSelector} from '../../selectors'

const renderFields = (phone) => {
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
      )(phone)
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

const renderContent = (phone, editNameAction) => {
  const editName = () => {
    console.log('edit click')
    editNameAction()
  }
  return (
      <div className='thumbnail'>
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
                {renderFields(phone)}
            </div>
          </div>
          <div className='caption-full'>
            <h4>{phone.name}</h4>
            <button
            onClick={editName}
            className='btn btn-primary'>
                Edit
            </button>
            <p>{phone.destination}</p>
          </div>
      </div>
    )
}

const Phone = ({phone, editNameAction}) => (
  <div className='view-container'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-10 offset-md-1'>
          {phone && renderContent(phone, editNameAction)}
        </div>
      </div>
    </div>
  </div>
)

export default compose(
    connect((state: AppState) => {
        return ({
            phone: getPhoneByIdSelector(state, state.phonePage.id)
        });
    }, {
        fetchPhoneById,
        editNameAction
    }),
  
    lifecycle({
      componentDidMount() {
        const {
            fetchPhoneById,
            params
        } = this.props
        fetchPhoneById(params.id)
      }
    })
  )(Phone)