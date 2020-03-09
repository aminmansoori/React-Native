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
    return {
        type: 'add_location',
        payload: Location
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


