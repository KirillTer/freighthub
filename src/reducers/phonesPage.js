import * as R from 'ramda'
import {FEATCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS, SEARCH_PHONE} from '../actions/actionTypes'

const initialState = {
    ids: [],
    search: ''
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FEATCH_PHONES_SUCCESS:
            return R.merge(state, {
                ids: R.pluck('id', payload)
            })
        case LOAD_MORE_PHONES_SUCCESS:
            return R.merge(state, {
                ids: R.pluck('id', payload)
            })
        case SEARCH_PHONE:
            return R.merge(state, {
                search: payload
            })
        default: return state
    }
}