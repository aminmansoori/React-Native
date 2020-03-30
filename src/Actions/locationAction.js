import trackerApi from '../api/tracker';

export const StartRecordingAction = (recording) => {
    return {
        type: 'startRecording',
        payload: recording
    }
}
export const StopRecordingAction = (recording) => {
    return {
        type: 'stopRecording',
        payload: recording
    }
}
export const addLocationAction = (Location) => {
    // console.log(Location);

    // return {
    //     type: 'add_location',
    //     payload: Location
    // }
    return async (dispatch) => {
        await trackerApi.post('/currentlocation', { location: [Location] })
        saveLocation(dispatch, Location);
    }
}
export const ChangeNameAction = (name) => {
    return {
        type: 'change_name',
        payload: name
    }
}
export const resetAction = () => {
    return {
        type: 'reset',
    }
}

export const saveLocation = (dispatch, Location) => {
    dispatch({
        type: 'add_location',
        payload: Location
    })
}


