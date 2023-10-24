import CardListComponent from "@/components/CardListComponent";
import { useCart } from "@/components/contexts/CartContext";
import ArrowTopComponent from "@/components/global/ArrowTopComponent";
import CategoryComponent from "@/components/global/CategoryComponent";
import ContactFormComponent from "@/components/global/ContactFormComponent";
import FooterComponent from "@/components/global/FooterComponent";
import NavBarComponent from "@/components/global/NavBarComponent";

export default function CartPage() {

  const { stateCart } = useCart();

  if (!stateCart) {
    console.log("useCart is undefined");
    return (
      <div className="text-dark-2 bg-light-1 font-raleway">
        <NavBarComponent />
        <CategoryComponent />

        <p className="text-3xl text-center font-bold p-8">
          cart context undefined
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

      {stateCart !== undefined && stateCart.cart.length ? (
        <div className="shadow-md">
          <h2 className="font-semibold text-3xl md:text-4xl p-10">Your Cart</h2>

          <CardListComponent products={stateCart.cart} />
        </div>
      ) : (
        <p className="text-3xl text-center font-bold p-8">
          No product has been added to the cart yet.
        </p>
      )}

      <ContactFormComponent />
      <FooterComponent />
      <ArrowTopComponent />
    </div>
  );
}
