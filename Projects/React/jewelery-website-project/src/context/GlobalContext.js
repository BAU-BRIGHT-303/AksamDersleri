import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [favoriler, setFavoriler] = useState([]);
  const [sepet, setSepet] = useState([]);

  const favorilereEkle = (favori) => {
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.concat(favori);

    setFavoriler(yeniFavoriler);
  };

  const favorilerdenCikar = (id) => {
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.filter((urunler) => urunler.id !== id);

    setFavoriler(yeniFavoriler);
  };
  const sepeteEkle = (sepetler) => {
    const eskiSepet = [...sepet];
    const yeniSepet = eskiSepet.concat(sepetler);

    setSepet(yeniSepet);
  };

  const sepettenCikar = (id) => {
    const eskiSepet = [...sepet];
    const yeniSepet = eskiSepet.filter((urunler) => urunler.id !== id);

    setSepet(yeniSepet);
  };
  return (
    <AppContext.Provider
      value={{
        favorilereEkle,
        favorilerdenCikar,
        favoriler,
        sepeteEkle,
        sepettenCikar,
        sepet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
