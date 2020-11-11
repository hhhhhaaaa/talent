import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../mead/components/app/index.jsx';
import rootReducer from '../mead/reducers/index.jsx';

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const store = createStore(rootReducer, preloadedState);

const renderRouter = Component => {
    hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Component />
                </div>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
};

renderRouter(App);
