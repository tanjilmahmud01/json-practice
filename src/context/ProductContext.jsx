import { comma } from "postcss/lib/list";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ProductContext = createContext();

export const ProductDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  let itemsPerPage = 9;

  let rangeSelection = (currentPage - 1) * itemsPerPage;
  // console.log(
  //   "range selection: ",
  //   rangeSelection,
  //   "current Page: ",
  //   currentPage
  // );

  const goNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
    toast("added to the cart", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const changeQuantity = (cartItem, command) => {
    if (command === "add") {
      let tempCart = [...cart];
      let item = tempCart.find((product) => product.id === cartItem.id);
      item.quantity += 1;
      let unitPrice = (
        cartItem.price -
        (cartItem.price * cartItem.discountPercentage) / 100
      ).toFixed(2);
      // console.log("unit price: ", unitPrice);
      item.cartPrice = unitPrice * item.quantity;
      setCart(tempCart);
    } else if (command === "subtract") {
      let tempCart = [...cart];

      let item = tempCart.find((product) => product.id === cartItem.id);
      if (item.quantity >= 1) {
        item.quantity -= 1;
      }
      if (item.quantity === 0) {
        let remaining = tempCart.filter((item) => item.id !== cartItem.id);
        setCart(remaining);
        return;
      }
      let unitPrice = (
        cartItem.price -
        (cartItem.price * cartItem.discountPercentage) / 100
      ).toFixed(2);
      // console.log("unit price: ", unitPrice);
      item.cartPrice = unitPrice * item.quantity;
      setCart(tempCart);
    }
  };

  console.log("cart: ", cart);

  const getAllProducts = () => {
    setLoading(true);
    console.log("Inside getallproducts", rangeSelection);
    fetch(
      `https://dummyjson.com/products?limit=${
        itemsPerPage + 1
      }&skip=${rangeSelection}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };

  useEffect(() => {
    getAllProducts();
    setLoading(false);
  }, [currentPage]);

  // console.log("In the context currentPage: ", currentPage);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        setLoading,
        cart,
        addToCart,
        changeQuantity,
        currentPage,
        goNextPage,
        goPrevPage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
