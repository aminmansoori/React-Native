import { navigate } from '../navigationRef';
import trackerApi from '../api/tracker';

export const createTrack = (locations, name) => {
    return async (dispatch) => {
        await trackerApi.post('/tracks', { name, locations })
        navigate('TrackList');
    }
}

export const fetchTrack = () => {
    return async (dispatch) => {
        const response = await trackerApi.get('/tracks')
        saveTrack(dispatch,response.data)
    }
}

export const saveTrack = (dispatch, trackList) => {
    dispatch({
        type: 'save_List_of_Tracks',
        payload: trackList
    })
}

