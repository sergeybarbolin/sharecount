import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import sources from './sources/reducer';
import { sourcesMiddleware } from './sources/middleware';

const rootReducer = combineReducers({
    sources,
});

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sourcesMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);