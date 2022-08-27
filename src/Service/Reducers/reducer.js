import { ADD_TO_CART, REMOVE_FROM_CART, RESET_CART } from './../constants';

export default function cardItems(state=[],action){
    //eslint-disable-next-line default-case
    
    switch (action.type) {
        case ADD_TO_CART: 
            document.querySelector('.order-btn').textContent='Order Now'
            return [...state,action.data]
        case REMOVE_FROM_CART:
            document.querySelector('.order-btn').textContent='Order Now'
            const found= state.findIndex(obj=>obj.model===action.data.model);
            state.splice(found, 1);
            return [...state]
        case RESET_CART:
            return []
        default:
            return state
    }
}