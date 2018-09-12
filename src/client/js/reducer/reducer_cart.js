const cart = [];

const cartReducer = (state = [...cart], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'REMOVE_ITEM':
            const firstMatchIndex = state.indexOf(action.payload);
            return state.filter((item, index) => index !== firstMatchIndex);
        default:
            return state;
    }
}

export default cartReducer;