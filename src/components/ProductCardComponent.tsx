import { Product } from "@/types/Product";
import { FavoritesActionType, useFavorites } from "./contexts/FavoritesContext";
import ImageComponent from "./global/ImageComponent";
import { CartActionType, useCart } from "./contexts/CartContext";
import { useEffect, useState } from "react";

type Prop = {
  product: Product;
};

export default function ProductCardComponent(prop: Prop) {
  let oldPrice = Math.ceil(
    (prop.product.price * 100) / (100 - prop.product.discountPercentage)
  );

  const { stateFav, dispatchFav } = useFavorites();
  const { stateCart, dispatchCart } = useCart();

  if (!{ stateFav, dispatchFav }) {
    console.log("favorites context undefined");
    return null;
  }

  if (!{ stateCart, dispatchCart }) {
    console.log("cart context undefined");
    return null;
  }

  const [textFav, setTextFav] = useState<string>();
  const [textCart, setTextCart] = useState<string>();

  useEffect(() => {
    stateFav.favorites.filter((prod) => prod.id === prop.product.id).length
      ? setTextFav("-")
      : setTextFav("+");
    stateCart.cart.filter((prod) => prod.id === prop.product.id).length
      ? setTextCart("-")
      : setTextCart("+");
  }, []);

  const handleClickFav = () => {
    if (
      !stateFav.favorites.filter((prod) => prod.id === prop.product.id).length
    ) {
      setTextFav("-");
      alert(`You added ${prop.product.title} to your wishlist!`);
      dispatchFav({
        type: FavoritesActionType.ADD_FAVORITES,
        payload: { favorite: prop.product },
      });
    } else {
      setTextFav("+");
      alert(`You removed ${prop.product.title} from your wishlist!`);
      dispatchFav({
        type: FavoritesActionType.REMOVE_FAVORITES,
        payload: { favorite: prop.product },
      });
    }
  };

  const handleClickCart = () => {
    if (!stateCart.cart.filter((prod) => prod.id === prop.product.id).length) {
      setTextCart("-");
      alert(`You added "${prop.product.title}" to you cart!`);
      dispatchCart({
        type: CartActionType.ADD_CART,
        payload: { product: prop.product },
      });
    } else {
      setTextCart("+");
      alert(`You removed "${prop.product.title}" from your cart!`);
      dispatchCart({
        type: CartActionType.REMOVE_CART,
        payload: { product: prop.product },
      });
    }
  };

  return (
    <div className="group max-h-fit transition duration-300 flex flex-col h-full shadow-md md:hover:shadow-xl rounded-lg overflow-hidden bg-white hover:bg-gradient-to-t hover:from-light-1 md:hover:scale-105 mx-auto md:max-w-[300px]">
      <a
        href={`/product/${prop.product.id}`}
        className="group-hover:scale-110 transition duration-300 h-3/6 overflow-hidden"
      >
        <ImageComponent
          src={prop.product.thumbnail}
          alt={prop.product.title}
          className="transition duration-300 group-hover:scale-105 mx-auto scale-125 max-h-44 object-contain"
        />
      </a>

      <div className="h-auto py-5 px-4">
        <a href={`/product/${prop.product.id}`}>
          <h5 className="text-yellow-900 font-semibold text-md">
            {prop.product.title.toUpperCase()}
          </h5>
          <p className="">{prop.product.brand}</p>
          <span className="font-semibold leading-7 text-lg">
            {" "}
            {prop.product.price}${" "}
          </span>
          <span className="line-through leading-7"> {`${oldPrice}$`}</span>
          <p className="font-medium text-yellow-900">{` - ${prop.product.discountPercentage}% OFF`}</p>

          <p>{prop.product.rating} /5</p>
        </a>

        <div className="flex justify-around py-3">
          <a
            href="#"
            className="text-yellow-900 font-semibold hover:scale-x-[1.05] underline sm:no-underline hover:underline"
            onClick={(event) => {
              event.preventDefault();
              handleClickFav();
            }}
          >
            {`${textFav} Favorites`}
          </a>

          <a
            href="#"
            className="text-yellow-900 font-semibold hover:scale-x-[1.05] underline sm:no-underline hover:underline"
            onClick={(event) => {
              event.preventDefault();
              handleClickCart();
            }}
          >
            {`${textCart} Cart`}
          </a>
        </div>
      </div>
    </div>
  );
}
