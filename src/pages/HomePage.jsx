import React from "react";
import menuler from "../yemekdata";
import MenuList from "../components/MenuList";

function Homepage() {
  return (
    <div>
      <div className="row">
        {menuler.map((menu) => (
          <div className="col-md-4">
            <MenuList menu={menu} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
