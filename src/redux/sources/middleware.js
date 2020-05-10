import { getSourcesRequest, getSourcesSuccess, getSourcesFailure } from './actions';
import { sourcesAPI } from './../../api/sources';

export const sourcesMiddleware = store => next => action => {
    if (action.type === getSourcesRequest.toString()) {
        sourcesAPI.getAll()
            .then(data => {
                store.dispatch(getSourcesSuccess(data))
            })
            .catch(e => {
                store.dispatch(getSourcesFailure(e.message))
            })
    }

    return next(action);
}