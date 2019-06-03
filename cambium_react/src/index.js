import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux';
import reducers from './store/reducers/index'
import AppRouter from './AppRouter';
import './App.css'

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = {}
if(process.env.NODE_ENV === 'production'){
    store = createStore(reducers,applyMiddleware(thunk))
}else{
    store = createStore(reducers,componseEnhancers(applyMiddleware(thunk)))
}

ReactDOM.render(<Provider store={store}><AppRouter/></Provider>, document.getElementById('root'));

