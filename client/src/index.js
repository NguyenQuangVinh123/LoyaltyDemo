import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import configureStore,{history} from './store/store';
import { ConnectedRouter } from 'connected-react-router'

// import reducer from './redux/reducers/reducer'
// const store =  createStore(reducer);

export const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
        <BrowserRouter><App /></BrowserRouter>
        </ConnectedRouter>
      
    </Provider>
    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
