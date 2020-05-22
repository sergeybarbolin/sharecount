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


export default combineReducers({ 
    items,
    isLoading,
})