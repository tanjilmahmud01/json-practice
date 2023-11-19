import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SingleProductDetails from "./pages/SingleProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products/:id" element={<SingleProductDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
