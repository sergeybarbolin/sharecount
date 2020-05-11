import { createAction } from 'redux-actions';

import { 
    GET_PAGES_REQUEST, 
    GET_PAGES_SUCCESS, 
    GET_PAGES_FAILURE,
} from './types';

export const getPagesRequest = createAction(GET_PAGES_REQUEST);
export const getPagesSuccess = createAction(GET_PAGES_SUCCESS);
export const getPagesFailure = createAction(GET_PAGES_FAILURE);