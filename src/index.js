import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import './styles/index.css'
import App from './app/components/App'
import Photos from './photos/components/Photos'
import Favorites from './photos/components/Favorites'
import OrderFavorites from './photos/components/OrderFavorites'
import reducer from './photos/reducers'
import * as serviceWorker from './serviceWorker'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path='photos' component={Photos} />
        <Route path='favorites' component={Favorites} />
        <Route path='order-favorites' component={OrderFavorites} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

