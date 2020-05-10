import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { 
    getSourcesSuccess, 
    getSourcesRequest, 
    getSourcesFailure,
    getDisabledSources,
    addDisableSources,
    removeDisabledSources,
} from './actions';

const items = handleActions({
    [getSourcesSuccess]: (_state, action) => action.payload,
    [getSourcesRequest]: () => [...Array(10)],
}, [...Array(10)])

const isLoading = handleActions({
    [getSourcesRequest]: () => true,
    [getSourcesSuccess]: () => false,
    [getSourcesFailure]: () => false
}, true)

const error = handleActions({
    [getSourcesRequest]: () => null,
    [getSourcesSuccess]: () => null,
    [getSourcesFailure]: (_state, action) => action.payload
}, null)

const disabledItems = handleActions({
    [getDisabledSources]: (_state) => [..._state],
    [addDisableSources]: (_state, action) => [ ...new Set([..._state, ...action.payload])],
    [removeDisabledSources]: (_state, action) => _state.filter(item => !action.payload.includes(item))
}, [])

export default combineReducers({ 
    items,
    isLoading,
    error,
    disabledItems
})