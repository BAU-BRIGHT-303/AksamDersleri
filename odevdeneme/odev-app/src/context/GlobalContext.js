import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

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

  return (
    <AppContext.Provider
      value={{ addFavourites, removeFavourites, favourites }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
