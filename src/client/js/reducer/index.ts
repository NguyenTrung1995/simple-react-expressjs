import { combineReducers } from 'redux';
import login from './login';
import cart from './cart';

const rootReducer = combineReducers({
    login,
    cart
})

export default rootReducer