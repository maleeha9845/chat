import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';


const firebaseConfig = {
    apiKey: "AIzaSyBZIClMDlL6Hx_v1F8TW_pE-v6AYsBwO7g",
    authDomain: "crynptonet.firebaseapp.com",
    databaseURL: "https://crynptonet.firebaseio.com",
    projectId: "crynptonet",
    storageBucket: "crynptonet.appspot.com",
    messagingSenderId: "490831695867",
    appId: "1:490831695867:web:69fba66d1b6bd9186f855e"
  };

let firebaseApp = firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export default firebaseApp;
