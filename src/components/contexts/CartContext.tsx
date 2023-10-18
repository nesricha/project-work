import localStorage from "localstorage-slim";
import { Product } from "@/types/Product";

export interface CartState {
  cart: { product: Product; qty: number }[];
}

const initialState: CartState = {
    cart: []
}

export enum CartActionType {
    FETCH = "FETCH",
    ADD_CART = "ADD_CART",
}

type CartAction = 
| {type: CartActionType.FETCH; payload: CartState}
| {type: CartActionType.ADD_CART; payload: {product: Product}}

const LOCAL_STORAGE_KEY = 'cart-key'

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case CartActionType.FETCH:
            localStorage.set(
                LOCAL_STORAGE_KEY,
                JSON.stringify({...state, ...action.payload})
            )
            return {...state, ...action.payload}
            case CartActionType.ADD_CART:
                
    }
    return state
}
