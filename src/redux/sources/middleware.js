import { getSourcesRequest, getSourcesSuccess } from './actions';
import { sourcesAPI } from './../../api/sources';

export const sourcesMiddleware = store => next => action => {
    console.log(action);

    if (action.type === getSourcesRequest.toString()) {
        sourcesAPI.getAll().then(data => {
            store.dispatch(getSourcesSuccess(data))
        })
    }

    return next(action);
}