import { combineReducers } from 'redux';
import loginReducer from './reducer_login';

const rootReducer = combineReducers({
    login: loginReducer
})

export default rootReducer