import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Album from './Album';
import * as serviceWorker from './serviceWorker';
import Error from './error';

ReactDOM.render(<Error />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
