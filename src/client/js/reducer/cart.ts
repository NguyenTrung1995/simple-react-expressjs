import { reducerWithInitialState } from "typescript-fsa-reducers";

import {
    addToCart,
    removeFromCart,
    removeAllFromCart,
    clearCartItem
} from '../actions';

const cartInitState = [];

const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id);
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0];

const add = (cart, item) => {
    const cartItem = itemInCart(cart, item);
    return cartItem === undefined 
        ? [...cart, {...item, quantity: 1}]
        : cart.map(x => x.id === cartItem.id ? {...x, quantity: x.quantity + 1} : x);
}

const remove = (cart, item) => {
    return item.quantity === 1
        ? [...cartWithoutItem(cart, item)]
        : cart.map(x => x.id === item.id ? {...x, quantity: x.quantity - 1} : x);
}

const removeAll = (cart, item) => {
    return [...cartWithoutItem(cart, item)]
}

const clearCart = () => {
    return [];
}

export default reducerWithInitialState(cartInitState)
            .case(addToCart, add)
            .case(removeFromCart, remove)
            .case(removeAllFromCart, removeAll)
            .case(clearCartItem, clearCart)