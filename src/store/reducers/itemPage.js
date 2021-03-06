import * as R from 'ramda'
import {FEATCH_ITEM_BY_ID_SUCCESS} from '../store/actions/actionTypes'

const initialState = {
    id: null
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FEATCH_ITEM_BY_ID_SUCCESS:
            return R.merge(state, {
                id: R.prop('id', payload)
            })
        default: return state
    }
}