// never change the index.js
import React from 'react';   //these import statements are how we import stuff with the react framework
import ReactDOM from 'react-dom'; //importing dom, and so forth below.
import './index.css'; 
import App from './App'; //this is coming from app.js
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

