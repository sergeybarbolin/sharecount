import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { 
    getPagesSuccess, 
    getPagesRequest, 
    getPagesFailure,
} from './actions';

const items = handleActions({
    [getPagesSuccess]: (_state, action) => action.payload,
    [getPagesRequest]: () => [],
}, [])

const isLoading = handleActions({
    [getPagesRequest]: () => true,
    [getPagesSuccess]: () => false,
    [getPagesFailure]: () => false
}, true)

const error = handleActions({
    [getPagesRequest]: () => null,
    [getPagesSuccess]: () => null,
    [getPagesFailure]: (_state, action) => action.payload
}, null)

export default combineReducers({ 
    items,
    isLoading,
    error
})