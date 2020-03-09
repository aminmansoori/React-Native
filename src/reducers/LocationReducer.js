const initialState = {
    locations: [],
    name: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'startRecording': {
            return { ...state, recording: action.payload };
        }
        case 'stopRecording': {
            return { ...state, recording: action.payload };
        }
        case 'add_current_location': {
            return { ...state, currentLocation: action.payload.Location };
        }
        case 'add_location': {
            if (state.recording) {

                return {
                    ...state, currentLocation: action.payload,
                    locations: [...state.locations, action.payload]
                };
            }
            else {
                return { ...state, currentLocation: action.payload };
            }
        }
        case 'change_name': {
           
            return {
                ...state,
                name: action.payload
            }
        }
        case 'reset': {
            return { ...state, name: '', locations: [] }
        }

        default:
            return state;
    }
}
