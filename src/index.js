import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider>
        <Routes />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
