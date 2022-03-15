import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'antd/dist/antd.min.css';
import HomeManagement from './container/HomeManagement';
import 'normalize.css';
import './style.scss';

ReactDOM.render(
    <Provider store={store}>
        <HomeManagement />
    </Provider>, document.getElementById('root')
);
