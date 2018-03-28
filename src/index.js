import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store';
import { firebaseApp } from './config/firebase';
import registerServiceWorker from './registerServiceWorker';

// firebaseApp.auth().onAuthStateChanged(user=>{
//     if(user){
//         const{ email } = user;
//         localStorage.setItem('email', email);
//     } else {
//         console.log('aawdaw')
//     }
// })

ReactDOM.render(
    <Provider store={store()}>
        <Routes />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
