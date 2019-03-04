import { combineReducers } from 'redux';
import login from './login';
import cart from './cart';
import { itemsHasErrored, itemsIsLoading, items } from './items';

const rootReducer = combineReducers({
    login,
    cart,
    itemsHasErrored,
    itemsIsLoading,
    items
})

export default rootReducer