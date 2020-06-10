import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-321b9.firebaseio.com/'
});

export default instance;