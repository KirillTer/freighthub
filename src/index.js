import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Router, Route, Redirect, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'

import reducers from './reducers/index'
import Layout from './containers/layout'
import Items from './containers/items'
import Item from './containers/item'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Redirect from='/' to='/itemsPage/1'/>
                <Route path='/itemsPage/:currentPage' component={Items} />
                <Route path='/items/:id' component={Item} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
