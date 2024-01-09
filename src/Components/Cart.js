import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useParams, Link } from "react-router-dom";
import { cartValue } from "./Products";

const Cart = () => {
  const values = useContext(cartValue);
  const [Product, setProduct] = useState("");
  const { ProductId } = useParams();
  const [count, setCount] = useState(1);

  useEffect(() => {
    const Fetch = async () => {
      try {
        const Response = await axios.get(
          " https://dummyjson.com/products/" + ProductId
        );

        setProduct(Response.data);
      } catch (err) {
        console.log(err);
      }
    };
    Fetch();
  }, []);
  return (
    <div className="box">
      {values && Product ? (
        <div className="cart-container">
          <h2>Shopping Cart</h2>
          <div className="cart-box">
            <div className="cart-img">
              <img
                src={Product.images[0]}
                alt=""
                width="150px"
                height="150px"
              ></img>
              <p>{Product.title}</p>
            </div>
            <div className="addcart">
              <button
                onClick={() => setCount((count) => Math.max(1, count - 1))}
              >
                -
              </button>
              {count}
              <button onClick={() => setCount((count) => count + 1)}>+</button>
            </div>
            <h3>${Product.price}</h3>
            <DeleteRoundedIcon className="dlt-icon" />
          </div>
          <div className="cart-pay">
            <button>Proceed to Pay</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart is Empty</h1>
          <button className="cart-product">
            <Link to="/">Add Something to Cart</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
