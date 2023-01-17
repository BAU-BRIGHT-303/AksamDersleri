import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [favoriler, setFavoriler] = useState([]);

  const favorilereEkle = (bike) => {
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.concat(bike);

    setFavoriler(yeniFavoriler);
  };

  const favorilerdenCikar = (id) => {
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.filter((urun) => urun.id !== id);

    setFavoriler(yeniFavoriler);
  };

  return (
    <AppContext.Provider
      value={{ favorilereEkle, favorilerdenCikar, favoriler }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
