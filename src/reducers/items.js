import * as R from 'ramda'
import {LOAD_MORE_ITEMS_SUCCESS, FEATCH_ITEM_BY_ID_SUCCESS} from '../actions/actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_MORE_ITEMS_SUCCESS:
            const moreValues = R.indexBy(R.prop('id'), payload)
            return R.merge(state, moreValues)
        case FEATCH_ITEM_BY_ID_SUCCESS:
            return R.assoc(payload.id, payload, state)
        default: return state
    }
}