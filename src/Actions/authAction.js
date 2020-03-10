import { navigate } from '../navigationRef';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';

export const signUpAction = (email, password) => {
    return async (dispatch) => {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        saveEmail(dispatch, email);
        navigate('TrackList');
    }
}

export const signInAction = (email, password) => {
    return async (dispatch) => {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        saveEmail(dispatch, email);
        navigate('TrackList');
    }
}

export const saveEmail = (dispatch, email) => {
    dispatch({
        type: 'save_Email',
        payload: email
    })
}

export const automaticSignInAction = () => {
    return async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            navigate('TrackList');
        } else {
            navigate('Signup');
        }
    }
}

export const signOutAction = () => {
    return async () => {
        await AsyncStorage.removeItem('token');
        navigate('loginFlow');
    }
}