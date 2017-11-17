import * as React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

const rootEl = document.getElementById('app');

const dataEl = document.getElementById('initial-data');

const jsonData: string = dataEl !== null
    ? dataEl.getAttribute('data-json')!
    : "";

const initialData = JSON.parse(jsonData);

hydrate(<App {...initialData} />, rootEl);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NewApp = require('./App').default;
        
        hydrate(<App {...initialData} />, rootEl);
    })
}