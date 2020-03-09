import { navigate } from '../navigationRef';
import trackerApi from '../api/tracker';

export const createTrack = (locations, name) => {
    return async (dispatch) => {
        await trackerApi.post('/tracks', { name, locations })
        console.log('done');
        navigate('TrackList');
    }
}

export const fetchTrack = () => {
    return async (dispatch) => {
        const response = await trackerApi.get('/tracks')
        console.log(response.data);
        
        saveTrack(dispatch,response.data)
    }
}

export const saveTrack = (dispatch, trackList) => {
    dispatch({
        type: 'save_List_of_Tracks',
        payload: trackList
    })
}

