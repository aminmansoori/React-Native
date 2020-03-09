const InitialState = {
    email: ''
}
export default (state = InitialState, action) => {
    switch (action.type) {

        case 'save_Email': {
            state.email = action.payload
            return { ...state };
        }
        case 'getAccountInfo':
            {
                return { ...state }
            }
        default:
            return state;
    }
}



