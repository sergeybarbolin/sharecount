import { createSelector } from 'reselect';
import { format, isToday, isThisWeek, isThisYear, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale'
import { getAllSources } from './../sources/selectors';

export const getAllPages = state => state.pages.items;
export const getPagesStatusLoading = state => state.pages.isLoading;
export const getPagesWithOwnerData = createSelector(
    getAllPages,
    getAllSources,
    (pages, sources) => {
        return pages.map(page => {
            if (!page || !sources[0]) {
                return page;
            }

            const ownerData = sources.find(source => source._id === page.owner)

            return {
                ...page,
                owner: ownerData,
            }
        })
    }
)
export const getPagesWithConvertDate = createSelector(
    getPagesWithOwnerData,
    (pages) => {
        return pages.map(page => {
            if (!page) {
                return page;
            }

            const date = parseISO(page.publishedDate);
            let formatDate

            if (isToday(date)) {
                formatDate = format(date, 'HH:mm');
            } else if (isThisWeek(date)) {
                formatDate = format(date, 'EEEEEE HH:mm', {
                    locale: ru
                });
            } else if (isThisYear(date)) {
                formatDate = format(date, 'dd.MM');
            } else {
                formatDate = format(date, 'dd.MM.yyyy');
            }

            return {
                ...page,
                publishedDate: formatDate
            }
        })
    }
)
export const getPages = state => getPagesWithConvertDate(state)
// export const getError = state => state.sources.error;
// export const getActiveItems = state => {
//     if (getLoadingStatus(state)) {
//         return null;
//     }

//     return getAllSources(state).map(({ _id }) => _id);
// }
// export const getSourcesWidthDisabledStatus = createSelector(
//     getAllSources,
//     getDisabledItems,
//     (items, disabledItems) => {
//         return items.map(item => ({
//             ...item, 
//             disabled: disabledItems.includes(item._id)
//         }))
//     }
// );
// export const getSortedByAlphabetical = createSelector(
//     getSourcesWidthDisabledStatus,
//     (items) => {
//         return items.sort((a, b) => {
//             if (a.title > b.title) {
//                 return 1
//             } else if (a.title < b.title) {
//                 return -1
//             } else {
//                 return 0
//             }
//         })
//     }
// );
// export const getSortedByDisabled = createSelector(
//     getSourcesWidthDisabledStatus,
//     (items) => {
//         return items.sort(item => {
//             if (item.disabled) {
//                 console.log(item.disabled);
//                 return 1
//             } else {
//                 return -1
//             }
//         })
//     }
// );
// export const getSources = state => {
//     if (getLoadingStatus(state)) {
//         return getAllSources(state);
//     }

//     return getSortedByAlphabetical(state);
// };
