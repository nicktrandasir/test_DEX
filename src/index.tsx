import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import {GlobalStyle} from './Common/GlobalStyle';
import {store} from "./redux";



ReactDOM.render(
    <Router>
        <Provider store={store} >
            <GlobalStyle/>
            <App/>
        </Provider>
    </Router>,
    document.getElementById('root'),
);
