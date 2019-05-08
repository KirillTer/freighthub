import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router'

import {loadNext, changePage} from '../../actions'
import {getItemsSelector, getCurrentPageSelector} from '../../selectors'
import Search from '../../components/search'

const renderItem = (item, index) => {
  return (
    <div className='col-lg-12 book-list' key={index}>
      <div className='thumbnail'>
        <div className='caption'>
          <h4>
            <Link to={`/items/${item.id}`}>
              {item.name}
            </Link>
          </h4>
          <p>{item.destination}</p>
        </div>
      </div>
    </div>
  )
}

const Items = ({items, page, loadNext, changePage}) => {
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
            {items.map((item, index) => renderItem(item, index))}
        </div>
        <div className='row'>
          <div className='col-md-1 offset-md-4'>
            <Link to={`/itemsPage/${page-1}`}>
              <button
              disabled={page<2}
              onClick={loadPrevClick}
              className='btn btn-primary loadMore'>
                  Prev
              </button>
            </Link>
          </div>
          <div className='col-md-1'>
            Page # {page}
          </div>
          <div className='col-md-1'>
            <Link to={`/itemsPage/${page+1}`}>
              <button
              disabled={page>1}
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
        items: getItemsSelector(state, ownProps),
        page: getCurrentPageSelector(state)
    });
}, {
    loadNext,
    changePage
})(Items)