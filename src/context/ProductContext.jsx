import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const addToCart = (addedProduct) => {
    // console.log("added product: ", addedProduct);

    let tempCart = [...cart];
    let exists = tempCart.find((product) => product.id === addedProduct.id);

    if (!exists) {
      addedProduct["quantity"] = 1;
      let unitPrice = (
        addedProduct.price -
        (addedProduct.price * addedProduct.discountPercentage) / 100
      ).toFixed(2);
      // console.log("unit price: ", unitPrice);
      addedProduct["cartPrice"] = unitPrice * addedProduct.quantity;
      // console.log(addedProduct?.cartPrice);
      tempCart.push(addedProduct);
      setCart(tempCart);
    } else {
      addedProduct.quantity += 1;
      let unitPrice = (
        addedProduct.price -
        (addedProduct.price * addedProduct.discountPercentage) / 100
      ).toFixed(2);
      // console.log("unit price: ", unitPrice);
      addedProduct.cartPrice = unitPrice * addedProduct.quantity;
      // console.log(addedProduct?.cartPrice);
      let remaining = tempCart.filter(
        (product) => product.id !== addedProduct.id
      );
      remaining.push(addedProduct);
      setCart(remaining);
    }
  };

  console.log("cart: ", cart);

  const getAllProducts = () => {
    setLoading(true);

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };

  useEffect(() => {
    getAllProducts();
    // setLoading(false);
  }, []);

  //   console.log("In the context: ", products.length);

  return (
    <ProductContext.Provider
      value={{ products, loading, setLoading, cart, addToCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};
