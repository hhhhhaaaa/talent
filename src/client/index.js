import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';

(typeof window === 'undefined') ?
    'node' : 
    global.window = {};
    global.document = {};
    ReactDOM.hydrate(
        <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        document.querySelector('.root'));

new webpack.DefinePlugin({
    'process.env.NODE_ENV': isDevelopment ? 'development' : 'production',
    'process.env.BROWSER': JSON.stringify(true),
    __DEV__: isDevelopment
})
