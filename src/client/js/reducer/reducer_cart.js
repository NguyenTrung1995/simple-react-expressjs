const cart = [];

const cartReducer = (state = [...cart], action) => {
    switch (action.type) {
        case 'ADD_CART':
            return [...state, action.item];
        case 'DELETE_CART':
            return [];
        default:
            return state;
    }
}

export default cartReducer;