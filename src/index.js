import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import GotService from './services/fetch.js';

ReactDOM.render(<App />, document.getElementById('root'));