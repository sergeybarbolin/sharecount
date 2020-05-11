import axios from './config';

export const pagesAPI = {
    get: (limit = 20, page = 0, sort = 'publishedDate', order = 'desc') => (
        axios.get(`/pages?_limit=${limit}&_sort=${sort}&_page=${page}&_order=${order}`)
            .then(response => response.data)
    )
}
