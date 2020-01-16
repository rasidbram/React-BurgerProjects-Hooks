import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-menuu.firebaseio.com/'
});

export default instance;