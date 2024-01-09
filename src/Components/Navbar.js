import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <h1>
          <Link to="/">E-Buy</Link>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div className="navbar-right">
          <div className="icon">
            <Link to="/Login">
              <LoginIcon className="icon1" />
              Login
            </Link>
          </div>
          <div className="icon">
            <Link to="/Products/Cart/:ProductId">
              <ShoppingCartIcon className="icon1" />
              Cart (0)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
