import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Products } from "./Components/Products";
import Home from "./Components/Home";
import ProductView from "./Components/ProductView";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import { cartValue } from "./Components/Products";

function App() {
  return (
    <div className="App">
      <cartValue.Provider value={{ cartValue }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Product" element={<Products />}></Route>
          <Route
            path="/Products/detail/:ProductId"
            element={<ProductView />}
          ></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Products/Cart/:ProductId" element={<Cart />}></Route>
        </Routes>
      </cartValue.Provider>
    </div>
  );
}

export default App;
