import React from "react";
import { Products } from "./Products";
import mainBanner from "./Main-Banner.jpeg";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <img src={mainBanner} width="100%" alt="..."></img>
      </div>
      <Products />
    </div>
  );
};

export default Home;
