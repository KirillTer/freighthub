import {FEATCH_PHONES_START, FEATCH_PHONES_SUCCESS, FEATCH_PHONES_FAILURE,
    LOAD_MORE_PHONES_START, LOAD_MORE_PHONES_SUCCESS, LOAD_MORE_PHONES_FAILURE,
    FEATCH_PHONE_BY_ID_START, FEATCH_PHONE_BY_ID_SUCCESS, FEATCH_PHONE_BY_ID_FAILURE,
    SEARCH_PHONE, EDIT_NAME} from './actionTypes'
import {fetchItemsApi, loadMorePhonesApi, fetchPhoneByIdApi} from '../api/'

export const fetchPhones = () => async dispatch => {
    dispatch({type: FEATCH_PHONES_START})

    try {
        const phones = await fetchItemsApi()
        dispatch({type: FEATCH_PHONES_SUCCESS, payload: phones})
    } catch (err) {
        dispatch({type: FEATCH_PHONES_FAILURE, payload: err, error: true})
    }
}

export const loadNext = (page) => async (dispatch) => {
    dispatch({type: LOAD_MORE_PHONES_START})

    try {
        const phones = await loadMorePhonesApi(page)
        dispatch({type: LOAD_MORE_PHONES_SUCCESS, payload: phones})
    } catch (err) {
        dispatch({type: LOAD_MORE_PHONES_FAILURE, payload: err, error: true})
    }
}

export const fetchPhoneById = id => async dispatch => {
    dispatch({type: FEATCH_PHONE_BY_ID_START})

    try {
        const phone = await fetchPhoneByIdApi(id)
        dispatch({type: FEATCH_PHONE_BY_ID_SUCCESS, payload: phone})
    } catch (err) {
        dispatch({type: FEATCH_PHONE_BY_ID_FAILURE, payload: err, error: true})
    }
}

export const searchPhone = (text) => dispatch => {
    dispatch({
      type: SEARCH_PHONE,
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