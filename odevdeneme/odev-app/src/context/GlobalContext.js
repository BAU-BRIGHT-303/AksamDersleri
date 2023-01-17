import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourites = (record) => {
    const oldFavourites = [...favourites];
    const newFavourites = oldFavourites.concat(record);

    setFavourites(newFavourites);
  };

  const removeFavourites = (id) => {
    const oldFavourites = [...favourites];
    const newFavourites = oldFavourites.filter((urun) => urun.id !== id);

    setFavourites(newFavourites);
  };

  return (
    <AppContext.Provider
      value={{ addFavourites,removeFavourites, favourites}}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
