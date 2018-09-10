import { combineReducers } from 'redux';
import loginReducer from './reducer_login';
import cartReducer from './reducer_cart';

const rootReducer = combineReducers({
    login: loginReducer,
    cart: cartReducer
})

export default rootReducer