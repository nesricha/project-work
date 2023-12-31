import CardListComponent from "@/components/CardListComponent";
import { useFavorites } from "@/components/contexts/FavoritesContext";
import ArrowTopComponent from "@/components/global/ArrowTopComponent";
import CategoryComponent from "@/components/global/CategoryComponent";
import ContactFormComponent from "@/components/global/ContactFormComponent";
import FooterComponent from "@/components/global/FooterComponent";
import NavBarComponent from "@/components/global/NavBarComponent";

export default function FavoritesPage() {

  const { stateFav } = useFavorites();

  if (!stateFav) {
    console.log("useFavorites is undefined");
    return ( 
      <div className="text-dark-2 bg-light-1 font-raleway">
        <NavBarComponent />
        <CategoryComponent />

        <p className="text-3xl text-center font-bold p-8">
          favorites context undefined
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

      {stateFav !== undefined && stateFav.favorites.length ? (
        <div className="shadow-md">
          <h2 className="font-semibold text-3xl md:text-4xl p-10">Your WishList</h2>

          <CardListComponent products={stateFav.favorites} />
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
