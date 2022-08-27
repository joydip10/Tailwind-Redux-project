import { ADD_TO_CART, REMOVE_FROM_CART }from '../constants';
import { RESET_CART } from './../constants';
export const addToCart=(data)=>{
    return {
        type: ADD_TO_CART,
        data:data
    }
}

export const removeFromCart=(data)=>{
    return{
        type: REMOVE_FROM_CART,
        data:data
    }
}

export const resetCart=()=>{
    return {
        type: RESET_CART,
    }
}