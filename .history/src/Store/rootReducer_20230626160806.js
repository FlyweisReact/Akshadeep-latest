import { combineReducers } from 'redux';
import loginReducer from './auth/reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  // Add other reducers here if needed
});

export default rootReducer;