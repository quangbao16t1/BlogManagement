import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:3131/',
    headers: {
        'content-type': 'application/json',
    }
})
export default axiosClient;
