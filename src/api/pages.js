import axios from './config';



export const pagesAPI = {
    get: (params) => {
        const defaultParams = { 
            limit: 20, 
            page: 0, 
            sort: 'publishedDate', 
            order: 'desc', 
            exclude: [],
            ...params
        }

        const {limit, page, sort, order, exclude} = defaultParams;
        let excludeParams = '';

        if (exclude.length) {
            excludeParams = `&exclude=${exclude.join()}`;
        }

        return axios.get(`/pages?_limit=${limit}&_sort=${sort}&_page=${page}&_order=${order}${excludeParams}`)
            .then(response => response.data)
    }
}
