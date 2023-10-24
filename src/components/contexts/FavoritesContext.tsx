import localStorage from "localstorage-slim";
import { Product } from "@/types/Product";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export interface FavoritesState {
  favorites: Product[];
}

const initialState: FavoritesState = {
  favorites: [],
};

export enum FavoritesActionType {
  FETCH = "FETCH",
  ADD_FAVORITES = "ADD_FAVORITES",
  REMOVE_FAVORITES = "REMOVE_FAVORITES",
}

type FavoritesAction =
  | { type: FavoritesActionType.FETCH; payload: FavoritesState }
  | { type: FavoritesActionType.ADD_FAVORITES; payload: { favorite: Product } }
  | {
      type: FavoritesActionType.REMOVE_FAVORITES;
      payload: { favorite: Product };
    };

const LOCAL_STORAGE_KEY = "favorites-key";

const favoriteReducer = (
  state: FavoritesState,
  action: FavoritesAction
): FavoritesState => {
  switch (action.type) {
    case FavoritesActionType.FETCH:
      localStorage.set(
        LOCAL_STORAGE_KEY,
        JSON.stringify({ ...state, ...action.payload })
      );
      return { ...state, ...action.payload };
    case FavoritesActionType.ADD_FAVORITES:
      state.favorites = Array.from(
        new Set([...state.favorites, action.payload.favorite])
      );
      localStorage.set(LOCAL_STORAGE_KEY, JSON.stringify(state));
      return state;
    case FavoritesActionType.REMOVE_FAVORITES:
      state.favorites = state.favorites.filter(
        (prod) => prod !== action.payload.favorite
      );
      localStorage.set(LOCAL_STORAGE_KEY, JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

const FavoritesContext = createContext<{
  stateFav: FavoritesState;
  dispatchFav: React.Dispatch<FavoritesAction>;
}>({
  stateFav: initialState,
  dispatchFav: () => null,
});

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [stateFav, dispatchFav] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    const encryptedFav: any = localStorage.get(LOCAL_STORAGE_KEY);
    if (!!encryptedFav)
      dispatchFav({
        type: FavoritesActionType.FETCH,
        payload: JSON.parse(encryptedFav),
      });
  }, []);

  return (
    <FavoritesContext.Provider value={{ stateFav, dispatchFav }}>
      {children}
    </FavoritesContext.Provider>
  );
};
