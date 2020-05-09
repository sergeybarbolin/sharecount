import { createAction } from 'redux-actions';

import { GET_SOURCES_REQUEST, GET_SOURCES_SUCCESS } from './types';

export const getSourcesRequest = createAction(GET_SOURCES_REQUEST);
export const getSourcesSuccess = createAction(GET_SOURCES_SUCCESS);
