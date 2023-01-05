import React from "react";
import Header from "../components/Header";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";

function PageContent() {
  return (
    <div className="w3-content" style={{ maxWidth: "1100px" }}>
      <Header />
    </div>
  );
}

export default PageContent;
