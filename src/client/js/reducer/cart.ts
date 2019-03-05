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
        ? [...cartWithoutItem(cart, item), {...item, quantity: 1}]
        : [...cartWithoutItem(cart, item), {...cartItem, quantity: cartItem.quantity + 1}]
}

const remove = (cart, item) => {
    return item.quantity === 1
        ? [...cartWithoutItem(cart, item)]
        : [...cartWithoutItem(cart, item), {...item, quantity: item.quantity - 1}]
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