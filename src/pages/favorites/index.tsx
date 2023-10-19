import CardListComponent from "@/components/CardListComponent";
import { useFavorites } from "@/components/contexts/FavoritesContext";
import ArrowTopComponent from "@/components/global/ArrowTopComponent";
import CategoryComponent from "@/components/global/CategoryComponent";
import ContactFormComponent from "@/components/global/ContactFormComponent";
import FooterComponent from "@/components/global/FooterComponent";
import NavBarComponent from "@/components/global/NavBarComponent";

export default function FavoritesPage() {

  //richiamo usefavorites per usare il context, a sto giro mi serve solo lo state quindi niente dispatch perchè non devo eseguire azioni
  const { state } = useFavorites();

  // gestione del comportamento del componente in caso di context undefined
  if (!state) {
    return ( // questo è il template che ottengo se il context è undefined
      <div className="text-dark-2 bg-light-1 font-raleway">
        <NavBarComponent />
        <CategoryComponent />

        <p className="text-3xl text-center font-bold p-8">
          "favoritesContext" is undefined
        </p>

        <ContactFormComponent />
        <FooterComponent />
        <ArrowTopComponent />
      </div>
    );
  }


  return (
    <div className="text-dark-2 bg-light-1 font-raleway">
      <NavBarComponent />
      <CategoryComponent />

      {state !== undefined && state.favorites.length ? (
        <div className="shadow-md">
          <h2 className="font-semibold text-3xl md:text-4xl p-10">Your WishList</h2>

          <CardListComponent products={state.favorites} />
        </div>
      ) : (
        <p className="text-3xl text-center font-bold p-8">
          No product has been added to the wishlist yet.
        </p>
      )}

      <ContactFormComponent />
      <FooterComponent />
      <ArrowTopComponent />
    </div>
  );
}
