import ReactDOM from "react-dom";
import React from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import App from './components/app';

import "./css/main.css";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
    </Provider>
    , document.getElementById("index"));