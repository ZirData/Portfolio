import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation';
ReactDOM.render(<Navigation />, document.getElementById('root'));

serviceWorker.unregister();
