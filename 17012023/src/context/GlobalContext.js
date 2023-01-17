import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [sepet, setSepet] = useState([]);

  const sepeteEkle = (urunler) => {
    const eskiSepet = [...sepet];
    const yeniSepet = eskiSepet.concat(urunler);

    setSepet(yeniSepet);
  };

  const sepettenCikar = (id) => {
    const eskiSepet = [...sepet];
    const yeniSepet = eskiSepet.filter((urun) => urun.id !== id);

    setSepet(yeniSepet);
  };

  return (
    <AppContext.Provider
      value={{ sepeteEkle, sepettenCikar, sepet }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
