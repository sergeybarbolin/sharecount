import { getPagesRequest, getPagesSuccess, getPagesFailure } from './actions';
import { pagesAPI } from './../../api/pages';

export const pagesMiddleware = store => next => action => {
    if (action.type === getPagesRequest.toString()) {
        pagesAPI.get(action.payload)
            .then(data => {
                store.dispatch(getPagesSuccess(data))
            })
            .catch(e => {
                store.dispatch(getPagesFailure(e.message))
            })
    }

    return next(action);
}