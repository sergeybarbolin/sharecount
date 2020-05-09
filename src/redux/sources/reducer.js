import { getSourcesSuccess } from './actions';

const initialState = {
    sources: []
};

export default (state = initialState, action) => {
    if (action.type === getSourcesSuccess.toString()) {
        return {...state, sources: [...action.payload]}
    }

    return state;
}