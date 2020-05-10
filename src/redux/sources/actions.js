import { createAction } from 'redux-actions';

import { 
    GET_SOURCES_REQUEST, 
    GET_SOURCES_SUCCESS, 
    GET_SOURCES_FAILURE,
    GET_DISABLED_SOURCES,
    ADD_DISABLED_SOURCES,
    REMOVE_DISABLED_SOURCES,
    CLEAR_DISABLED_SOURCES
} from './types';

export const getSourcesRequest = createAction(GET_SOURCES_REQUEST);
export const getSourcesSuccess = createAction(GET_SOURCES_SUCCESS);
export const getSourcesFailure = createAction(GET_SOURCES_FAILURE);
export const getDisabledSources = createAction(GET_DISABLED_SOURCES);
export const addDisableSources = createAction(ADD_DISABLED_SOURCES);
export const removeDisabledSources = createAction(REMOVE_DISABLED_SOURCES);
export const clearDisabledSources = createAction(CLEAR_DISABLED_SOURCES);