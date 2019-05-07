import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router'

import {fetchPhones, loadNext, changePage} from '../../actions/'
import {getPhonesSelector, getCurrentPageSelector} from '../../selectors'
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

const Phones = ({phones, page, loadNext, fetchPhones, changePage}) => {
  useEffect(() => {
    loadNext(page)
  }, [])
  const loadNextClick = () => {
    changePage(page+1)
    loadNext(page+1)
  }
  const loadPrevClick = () => {
    if (page > 1) {
      changePage(page-1)
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
            <Link to={`/phonesPage/${page-1}`}>
              <button
              onClick={loadPrevClick}
              className='btn btn-primary loadMore'>
                  Prev
              </button>
            </Link>
          </div>
          <div className='col-md-1'>
            <Link to={`/phonesPage/${page+1}`}>
              <button
              onClick={loadNextClick}
              className='btn btn-primary loadMore'>
                  Next
              </button>
            </Link>
          </div>
        </div>
    </div>
  )
}  

export default connect((state: AppState, ownProps) => {
    return ({
        phones: getPhonesSelector(state, ownProps),
        page: getCurrentPageSelector(state)
    });
}, {
    fetchPhones,
    loadNext,
    changePage
})(Phones)