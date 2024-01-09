import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShareIcon from "@mui/icons-material/Share";

const ProductView = () => {
  const [products, setProduct] = useState("");
  const { ProductId } = useParams();

  useEffect(() => {
    const Fetch = async () => {
      try {
        const Response = await axios.get(
          " https://dummyjson.com/products/" + ProductId
        );
        console.log(Response.data);
        setProduct(Response.data);
      } catch (err) {
        console.log(err);
      }
    };
    Fetch();
  }, []);
  return (
    <>
      {products && (
        <div className="productview-box">
          <div className="pv-image">
            <img
              src={products.images[0]}
              width="250px"
              height="250px"
              alt="..."
              className="img"
            ></img>
          </div>

          <div className="pv-detail">
            <div className="back-icon">
              <Link to="/" className="icon-link">
                <KeyboardBackspaceIcon className="icon1" />
                Back
              </Link>
              <ShoppingCartIcon className="icon1" />
            </div>
            <p className="orinaz">ORINAZ</p>
            <h3>{products.title}</h3>
            <p className="pv-price"> ${products.price}</p>
            <p className="pv-description">{products.description}</p>
            <div className="pv-footer">
              <button>BUY NOW</button>
              <FavoriteRoundedIcon className="icon2" />
              <ShareIcon className="icon2" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductView;
