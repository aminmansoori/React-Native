import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    // baseURL: 'https://trackservice-aminreza.fandogh.cloud/'  //baseURL is achieved via run jsonserver project
    baseURL: 'http://3c547b04.ngrok.io'  //baseURL is achieved via run jsonserver project
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)
export default instance;