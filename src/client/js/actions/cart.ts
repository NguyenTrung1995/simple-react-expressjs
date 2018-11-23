import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

// action names
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const REMOVE_ALL_ITEM = "REMOVE_ALL_ITEM";

// actions
export const addToCart = actionCreator(ADD_ITEM);
export const removeFromCart = actionCreator(REMOVE_ITEM);
export const removeAllFromCart = actionCreator(REMOVE_ALL_ITEM);