import axios from './config';



export const pagesAPI = {
    get: (params) => {
        const defaultParams = { 
            limit: 20, 
            page: 0, 
            sort: 'publishedDate', 
            order: 'desc', 
            exclude: {
                key: null,
                value: []
            },
            ...params
        }

        const {limit, page, sort, order, exclude} = defaultParams;
        let excludeParams = '';

        if (exclude.key) {
            exclude.value.forEach(val => {
                excludeParams += `&${exclude.key}_ne=${val}`
            })
        }

        return axios.get(`/pages?_limit=${limit}&_sort=${sort}&_page=${page}&_order=${order}${excludeParams}`)
            .then(response => response.data)
    }
}
