export default(state = [], payload) => {
    switch (payload.type) {
        case 'add':
            return [...state, payload.item];
        case 'remove':
            let itemIndex = state.cart.indexOf(payload.item);
            return [state.cart.slice(0, itemIndex), state.cart.slice(itemIndex + 1)];
        default:
            return state;
    }
};