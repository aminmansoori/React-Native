import { combineReducers } from 'redux';
import authReducer from './authReducer';
import LocationReducer from './LocationReducer';
import trackReducer from './trackReducer';
export default combineReducers({
    LocationReducer,
    authReducer,
    trackReducer
})