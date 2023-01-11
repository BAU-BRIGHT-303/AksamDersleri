import React, { useContext } from "react";
import { GlobalData } from "../context/GlobalContext";

function Footer() {
  const { name, surname } = useContext(GlobalData);
  return (
    <div>
      <h1 className="display-2"> Contexten Gelen İsim: {name} </h1>
      <h1 className="display-2"> Contexten Gelen Soyisim: {surname} </h1>
    </div>
  );
}

export default Footer;
