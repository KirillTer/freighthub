import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import items from './items'
import itemsPage from './itemsPage'
import itemPage from './itemPage'

export default combineReducers({
    routing: routerReducer,
    items,
    itemsPage,
    itemPage
})