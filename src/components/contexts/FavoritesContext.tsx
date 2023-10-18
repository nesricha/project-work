import localStorage from "localstorage-slim";
import { Product } from "@/types/Product";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
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
}

type FavoritesAction =
  | { type: FavoritesActionType.FETCH; payload: FavoritesState }
  | { type: FavoritesActionType.ADD_FAVORITES; payload: { favorite: Product } };

const LOCAL_STORAGE_KEY = "favorites-key";

const favoriteReducer = (state: FavoritesState, action: FavoritesAction): FavoritesState => {
  switch (action.type) {
    case FavoritesActionType.FETCH:
      localStorage.set(
        LOCAL_STORAGE_KEY,
        JSON.stringify({ ...state, ...action.payload })
      );
      return { ...state, ...action.payload };
    case FavoritesActionType.ADD_FAVORITES:
      state.favorites = Array.from(new Set([...state.favorites, action.payload.favorite]));
      localStorage.set(LOCAL_STORAGE_KEY, JSON.stringify(state));
    default:
      return state;
  }
};

const FavoritesContext = createContext<{
  state: FavoritesState;
  dispatch: React.Dispatch<FavoritesAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    const encryptedFav: any = localStorage.get(LOCAL_STORAGE_KEY);
    if (!!encryptedFav)
      dispatch({
        type: FavoritesActionType.FETCH,
        payload: JSON.parse(encryptedFav),
      });
  }, []);

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};
