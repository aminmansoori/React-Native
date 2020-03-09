const initialState = {
    TrackList: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'save_List_of_Tracks': {
            return { ...state, TrackList: action.payload }
        }
        default:
            return state;
    }
}
