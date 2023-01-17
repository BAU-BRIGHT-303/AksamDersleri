import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [favoriler, setFavoriler] = useState([]);

  const favorilereEkle = (oyun) => {
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.concat(oyun);

    setFavoriler(yeniFavoriler);
  };

  const favorilerdenCikar = (id) => {
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.filter((oyun) => oyun.id !== id);

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
