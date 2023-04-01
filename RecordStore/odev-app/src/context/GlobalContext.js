import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const [cart, setCart] = useState([]);

  const addFavourites = (name) => {
    const oldFavourites = [...favourites];
    const newFavourites = oldFavourites.concat(name);

    setFavourites(newFavourites);
  };

  const removeFavourites = (id) => {
    const oldFavourites = [...favourites];
    const newFavourites = oldFavourites.filter((record) => record.id !== id);

    setFavourites(newFavourites);
  };

  const addToCart = (name) => {
    const oldCart = [...favourites];
    const newCart = oldCart.concat(name);

    setCart(newCart);
  };

  const removeFromCart = (id) => {
    const oldCart = [...cart];
    const newCart = oldCart.filter((record) => record.id !== id);

    setCart(newCart);
  };

  return (
    <AppContext.Provider
      value={{ addFavourites, removeFavourites, favourites,addToCart, removeFromCart, cart }}
    >
      {children}
    </AppContext.Provider>
  );

  }
export default AppContextProvider;
