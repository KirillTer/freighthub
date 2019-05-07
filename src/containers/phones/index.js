import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router'

import {fetchPhones, loadNext} from '../../actions/'
import {getPhonesSelector} from '../../selectors'
import Search from '../../components/search'

const renderPhone = (phone, index) => {
  return (
    <div className='col-lg-12 book-list' key={index}>
      <div className='thumbnail'>
        <div className='caption'>
          <h4>
            <Link to={`/phones/${phone.id}`}>
              {phone.name}
            </Link>
          </h4>
          <p>{phone.destination}</p>
        </div>
      </div>
    </div>
  )
}

const Phones = ({phones, loadNext, fetchPhones}) => {
  const [page, setPage] = useState(1)
  useEffect(() => {
    fetchPhones()
  }, [])
  const loadNextClick = () => {
    setPage(page+1)
    loadNext(page+1)
  }
  const loadPrevClick = () => {
    if (page > 1) {
      setPage(page-1)
      loadNext(page-1)
    }
  }
  return (
    <div>
      <Search />
        <div className='books row'>
            {phones.map((phone, index) => renderPhone(phone, index))}
        </div>
        <div className='row'>
          <div className='col-md-1 offset-md-5'>
              <button
              onClick={loadPrevClick}
              className='btn btn-primary loadMore'>
                  Prev
              </button>
          </div>
          <div className='col-md-1'>
              <button
              onClick={loadNextClick}
              className='btn btn-primary loadMore'>
                  Next
              </button>
          </div>
        </div>
    </div>
  )
}  

export default connect((state: AppState, ownProps) => {
    return ({
        phones: getPhonesSelector(state, ownProps)
    });
}, {
    fetchPhones,
    loadNext
})(Phones)