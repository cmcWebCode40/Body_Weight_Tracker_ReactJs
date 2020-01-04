import { combineReducers } from "redux";
import { firebaseReducer } from 'react-redux-firebase';

import authenticationReducers from './authReducers';

export default combineReducers({
     auth: authenticationReducers,
     firebase: firebaseReducer
})
