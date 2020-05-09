import axios from './config';

export const sourcesAPI = {
    getAll: () => axios.get('/sources').then(response => response.data)
}
