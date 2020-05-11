import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import sources from './sources/reducer';
import pages from './pages/reducer';

import { sourcesMiddleware } from './sources/middleware';
import { pagesMiddleware } from './pages/middleware';


const rootReducer = combineReducers({
    sources,
    pages,
});

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sourcesMiddleware),
        applyMiddleware(pagesMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);