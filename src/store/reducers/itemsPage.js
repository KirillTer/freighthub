import * as R from 'ramda'
import {LOAD_MORE_ITEMS_SUCCESS, SEARCH_ITEM, CHANGE_PAGE} from '../actions/actionTypes'

const initialState = {
    currentPage: 1,
    ids: [],
    search: ''
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case CHANGE_PAGE:
            return R.merge(state, {
                currentPage: payload
            })
        case LOAD_MORE_ITEMS_SUCCESS:
            return R.merge(state, {
                ids: R.pluck('id', payload)
            })
        case SEARCH_ITEM:
            return R.merge(state, {
                search: payload
            })
        default: return state
    }
}