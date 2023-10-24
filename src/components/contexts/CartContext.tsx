import localStorage from "localstorage-slim";
import { Product } from "@/types/Product";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

export interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

export enum CartActionType {
  FETCH = "FETCH",
  ADD_CART = "ADD_CART",
  REMOVE_CART = "REMOVE_CART",
}

type CartAction =
  | { type: CartActionType.FETCH; payload: CartState }
  | { type: CartActionType.ADD_CART; payload: { product: Product } }
  | { type: CartActionType.REMOVE_CART; payload: { product: Product } };

const LOCAL_STORAGE_KEY = "cart-key";

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionType.FETCH:
      localStorage.set(
        LOCAL_STORAGE_KEY,
        JSON.stringify({ ...state, ...action.payload })
      );
      return { ...state, ...action.payload };
    case CartActionType.ADD_CART:
      state.cart = Array.from(new Set([...state.cart, action.payload.product]));
      localStorage.set(LOCAL_STORAGE_KEY, JSON.stringify(state));
      return state;
    case CartActionType.REMOVE_CART:
      state.cart = Array.from(
        new Set([
          ...state.cart.filter((prod) => prod.id !== action.payload.product.id),
        ])
      );
      localStorage.set(LOCAL_STORAGE_KEY, JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

const CartContext = createContext<{
  stateCart: CartState;
  dispatchCart: React.Dispatch<CartAction>;
}>({
  stateCart: initialState,
  dispatchCart: () => null,
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [stateCart, dispatchCart] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const encryptedCart: any = localStorage.get(LOCAL_STORAGE_KEY);
    if (!!encryptedCart)
      dispatchCart({
        type: CartActionType.FETCH,
        payload: JSON.parse(encryptedCart),
      });
  }, []);

  return (
    <CartContext.Provider value={{ stateCart, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};
