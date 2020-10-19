// import ReactDOM from 'react-dom';
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
// import Animate from './Animate'
import * as serviceWorker from './serviceWorker';
import './theme/globalStyle'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(App, document.getElementById('root'));
render(App, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <Animate />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
