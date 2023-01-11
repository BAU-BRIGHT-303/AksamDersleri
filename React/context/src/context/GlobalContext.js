import { createContext } from "react";

export const GlobalData = createContext();

export const GlobalProvider = (props) => {
  return (
    <GlobalData.Provider value={{ name: "Barbaros", surname: "Ciga" }}>
      {props.children}
    </GlobalData.Provider>
  );
};
