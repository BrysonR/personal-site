import * as React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

const rootEl = document.getElementById('app');

const dataEl = document.getElementById('initial-data');

const jsonData = dataEl!.getAttribute('data-json')!;

const initialData = JSON.parse(jsonData);

hydrate((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), rootEl);

// hydrate(<App {...initialData} />, rootEl);

if (module.hot) {
    module.hot.accept();
    console.log('brys');
}
