import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";

const cartValue = createContext();

const Products = () => {
  const [cartActive, setCartActive] = useState(false);
  const [product, setProduct] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const Fetch = async () => {
      try {
        const Response = await axios.get(" https://dummyjson.com/products");
        console.log(Response.data);
        setProduct(Response.data.products);
        setCartActive(true);
      } catch (err) {
        console.log(err);
      }
    };
    Fetch();
  }, []);

  const ProductData = (id) => {
    navigate("/Products/detail/" + id);
  };
  const ProductCart = (id) => {
    navigate("/Products/Cart/" + id);
    setCartActive(true);
  };

  return (
    <div className="product">
      <h1 className="heading">Products</h1>
      <div className="product-list">
        {product &&
          product.map((products) => (
            <div key={products.id} className="product-comp">
              <img
                src={products.images[0]}
                height="250px"
                width="100%"
                alt="..."
                className="product-image"
              ></img>
              <div className="product-info">
                <h3 className="product-title"> {products.title}</h3>
                <div className="product-price">${products.price}</div>
                <div className="product-btn">
                  <button onClick={() => ProductData(products.id)}>View</button>
                  <button onClick={() => ProductCart(products.id)}>
                    AddToCart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Contact />
    </div>
  );
};

export { Products, cartValue };
