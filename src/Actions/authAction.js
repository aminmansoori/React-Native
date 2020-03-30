import { navigate } from '../navigationRef';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';

export const signUpAction = (email, password) => {
    return async (dispatch) => {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('UserNamne', email);
        saveUser(dispatch, email);
        // navigate('TrackList');
        navigate('TrackCreate');
    }
}

export const signInAction = (email, password) => {
    return async (dispatch) => {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('UserNamne', email);
        saveUser(dispatch, email);
        navigate('TrackCreate');
    }
}

export const saveUser = (dispatch, email) => {
    dispatch({
        type: 'save_Email',
        payload: email
    })
}

export const automaticSignInAction = () => {
    return async (dispatch) => {
        const token = await AsyncStorage.getItem('token');
        const user = await AsyncStorage.getItem('UserNamne');
        if (token) {
            saveUser(dispatch, user);
            navigate('TrackCreate');
        } else {
            navigate('Signup');
        }
    }
}

export const signOutAction = () => {
    return async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('UserNamne');
        navigate('loginFlow');
    }
}