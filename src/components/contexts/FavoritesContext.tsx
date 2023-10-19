
//il context viene fornito (provider) ad app.tsx e viene usato in "ProductCardComponent" e nella pagina "favorites"

// per poter usare la proprietà localstorage installa il pacchetto "localstorage-slim"
import localStorage from "localstorage-slim";
import { Product } from "@/types/Product";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

// Definisco l'interfaccia del contesto, che è simile al tipo ma è più flessibile, in quanto
// l'interfaccia può essere dichiarata più volte, può essere cambiata.
// Il tipo, invece, una volta dichiarato non posso più cambiarlo.
export interface FavoritesState {
  favorites: Product[];
}

// Definisco lo stato iniziale del contesto
const initialState: FavoritesState = {
  favorites: [],
};

// Nell'enum metto le costanti di cui avrò bisogno nel contesto, che in questo caso sono delle azioni,
// potrei anche non creare queste costanti ma così il codice è più pulito(?) e riduco gli errori di typing
export enum FavoritesActionType {
  FETCH = "FETCH",
  ADD_FAVORITES = "ADD_FAVORITES",
}

// Qui definisco il tipo delle azioni che eseguirò nel contesto, e lo faccio richiamando le costanti appena dichiarate in 'FavoritesActionType'
// Queste azioni possono essere (in questo caso specifico) o di tipo FETCH o di tipo ADD_FAVORITES
// Ogni azione è un oggetto con 2 proprietà: la proprietà 'type', che indica appunto il tipo di azione, 
// e la proprietà 'payload', la quale racchiude il dato che verrà trasferito/coinvolto durante l'azione svolta (quindi fetch o add)  
type FavoritesAction =
  | { type: FavoritesActionType.FETCH; payload: FavoritesState }
  | { type: FavoritesActionType.ADD_FAVORITES; payload: { favorite: Product } };


// Local storage è una proprietà che mi permette di immagazzinare dati da usare in tutto il sito senza che questi scadano 
// ( fatta eccezione per la modalità in incognito ), a differenza del session storage in cui i dati vengono cancellati quando chudo la pagina
// Qui i dati vengono immagazzinati in coppie chiave-valore. Per potervi accedere c'è bisogno di una key che conservi questi dati, 
// a cui va assegnato un valore arbitrario (nel mio caso il valore della key è "favorites-key")
const LOCAL_STORAGE_KEY = "favorites-key";


// "Reducer" è un tipo di funzione che accetta come parametri uno stato, in questo caso di tipo "FavoritesState" (dichiarato qualche 
// riga più in alto), e un azione, di tipo "FavoritesAction" (anch'esso dichiarato in precedenza)
// Questa funzione prende lo stato attuale, applica un'azione e mi restituisce un nuovo stato
const favoriteReducer = (
  state: FavoritesState, 
  action: FavoritesAction
): FavoritesState => {
  switch (action.type) { // uso lo switch per farmi restituire degli stati diversi in base al tipo di azione compiuta
    case FavoritesActionType.FETCH: //primo caso: azione di tipo FETCH
      localStorage.set( 
        LOCAL_STORAGE_KEY, //qui la chiave contiene lo stato, in formato stringa, che voglio aggiornare
        JSON.stringify({ ...state, ...action.payload }) // qui c'è il valore che voglio assegnare allo stato, il nuovo valore che assumerà
      );
      return { ...state, ...action.payload }; //questo è lo stato che mi restituisce la FETCH
    case FavoritesActionType.ADD_FAVORITES: //secondo caso: azione di tipo ADD_FAVORITES
      state.favorites = Array.from( //il metodo from mi restiurà un array dal new set, che uso per non avere duplicati 
        new Set([...state.favorites, action.payload.favorite]) // dentro alle quadre, nel new set, ho 2 valori: il primo è l'array attuale,  
      );                                                       // il secondo è il dato che voglio aggiungere all'array, come se facessi un push
      localStorage.set(LOCAL_STORAGE_KEY, JSON.stringify(state)); //qui aggiorno lo stato nel local storage, passandogli la key
    default:                                                     //(ovvero il valore che voglio aggiornare) e il nuovo stato
      return state;
  }
};


//Creo il contesto, ovvero i dati che vorrò passare tra i vari componenti. Definico il tipo dentro alle parentesi angolari(?)
// e lo stato iniziale dentro alle tonde
const FavoritesContext = createContext<{
  state: FavoritesState;
  dispatch: React.Dispatch<FavoritesAction>; //dispatch è una funzione che accetta un oggetto in cui sono definite le azioni che voglio eseguire
}>({
  state: initialState,
  dispatch: () => null,
});


// "useFavorites" è la funzione che richiamerò all'interno dei componenti quando avrò bisogno di usare il contesto creato
export const useFavorites = () => useContext(FavoritesContext); //useContext è l'hook che mi permette di usare il contesto (passato a useContext come parametro)

// "FavoritesProvider" è la funzione che dovrà inglobare tutto il progetto per fornire il contesto a tutti i children (quindi tutti i componenti e le pagine ecc)
// Non è obbligatorio usare il provider su tutto il progetto, perchè il provider fornisce i dati alle sezioni che inglobi, 
// quindi volendo potrei anche circondare delle sezioni specifiche e il context verrà passato solo a quelle sezioni
export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => { //precedentemente, nel reducer, ho aggiornato il valore della key in base alle azioni eseguite( le devo ancora eseguire)
    const encryptedFav: any = localStorage.get(LOCAL_STORAGE_KEY);  // prima di aggiornare il valore(metodo set) devo prenderlo da qualche parte, per quello uso get
    if (!!encryptedFav) // il "!!" è una specie di very-undefined(?)
      dispatch({ //quando c'è dispatch vuol dire che c'è qualche azione da compiere
        type: FavoritesActionType.FETCH,
        payload: JSON.parse(encryptedFav), //nel metodo get viene passato un valore in formato stringa, per questo lo "parso"
      });
  }, []);

  return ( // Questo è il modo in cui wrappo le sezioni a cui voglio fornire il context
    <FavoritesContext.Provider value={{ state, dispatch }}> {/* value contiene i dati che voglio passare ai figli, ovvero lo stato e le azioni(dispatch) */}
      {children}
    </FavoritesContext.Provider>
  );
};
