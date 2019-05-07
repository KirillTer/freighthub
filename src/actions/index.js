import {LOAD_MORE_ITEMS_START, LOAD_MORE_ITEMS_SUCCESS, LOAD_MORE_ITEMS_FAILURE,
    FEATCH_ITEM_BY_ID_START, FEATCH_ITEM_BY_ID_SUCCESS, FEATCH_ITEM_BY_ID_FAILURE,
    SEARCH_ITEM, EDIT_NAME, CHANGE_PAGE} from './actionTypes'
import {loadItemsForPageApi, fetchItemByIdApi} from '../api/'

export const changePage = (page) => dispatch => {
    dispatch({
      type: CHANGE_PAGE,
      payload: page
    })
}

export const loadNext = (page) => async (dispatch) => {
    dispatch({type: LOAD_MORE_ITEMS_START})

    try {
        const items = await loadItemsForPageApi(page)
        dispatch({type: LOAD_MORE_ITEMS_SUCCESS, payload: items})
    } catch (err) {
        dispatch({type: LOAD_MORE_ITEMS_FAILURE, payload: err, error: true})
    }
}

export const fetchItemById = id => async dispatch => {
    dispatch({type: FEATCH_ITEM_BY_ID_START})

    try {
        const item = await fetchItemByIdApi(id)
        dispatch({type: FEATCH_ITEM_BY_ID_SUCCESS, payload: item})
    } catch (err) {
        dispatch({type: FEATCH_ITEM_BY_ID_FAILURE, payload: err, error: true})
    }
}

export const searchItem = (text) => dispatch => {
    dispatch({
      type: SEARCH_ITEM,
      payload: text
    })
}

export const editNameAction = () => dispatch => {
    console.log('edit action')
    dispatch({
      type: EDIT_NAME,
      payload: 'some'
    })
}