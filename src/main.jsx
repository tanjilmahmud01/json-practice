import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductDataProvider } from "./context/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductDataProvider>
        <App />
      </ProductDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
