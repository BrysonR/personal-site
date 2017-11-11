import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const rootEl = document.getElementById('app');
const dataEl = document.getElementById('initial-data').getAttribute('data-json');

const initialData = JSON.parse(dataEl);

ReactDOM.hydrate(<App {...initialData} />, rootEl);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NewApp = require('./App').default;
        
        ReactDOM.hydrate(<App {...initialData} />, rootEl);
    })
}