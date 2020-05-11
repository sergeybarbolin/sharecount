import { createSelector } from 'reselect'

export const getAllSources = state => state.sources.items;
export const getDisabledItems = state => state.sources.disabledItems;
export const getLoadingStatus = state => state.sources.isLoading;
export const getError = state => state.sources.error;
export const getActiveItems = state => {
    if (getLoadingStatus(state)) {
        return null;
    }

    return getAllSources(state).map(({ _id }) => _id);
}
export const getSourcesWidthDisabledStatus = createSelector(
    getAllSources,
    getDisabledItems,
    (items, disabledItems) => {
        return items.map(item => ({
            ...item, 
            disabled: disabledItems.includes(item._id)
        }))
    }
);
export const getSortedByAlphabetical = createSelector(
    getSourcesWidthDisabledStatus,
    (items) => {
        return items.sort((a, b) => {
            if (a.title > b.title) {
                return 1
            } else if (a.title < b.title) {
                return -1
            } else {
                return 0
            }
        })
    }
);
export const getSortedByDisabled = createSelector(
    getSourcesWidthDisabledStatus,
    (items) => {
        return items.sort(item => {
            if (item.disabled) {
                console.log(item.disabled);
                return 1
            } else {
                return -1
            }
        })
    }
);
export const getSources = state => {
    if (getLoadingStatus(state)) {
        return getAllSources(state);
    }

    return getSortedByAlphabetical(state);
};
