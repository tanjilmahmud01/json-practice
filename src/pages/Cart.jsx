import React, { useContext } from "react";
import Layout from "../layout/Layout";
import { ProductContext } from "../context/ProductContext";

const Cart = () => {
  const { cart, changeQuantity } = useContext(ProductContext);

  let cartItemsQuantity = 0;
  let cartItemsPrice = 0;

  cart.map(
    (cartItem) => (cartItemsQuantity = cartItemsQuantity + cartItem.quantity)
  );
  cart.map(
    (cartItem) => (cartItemsPrice = cartItemsPrice + cartItem.cartPrice)
  );

  console.log("cartItemsQuantity", cartItemsQuantity);
  console.log("cartItemsPrice", cartItemsPrice);

  return (
    <Layout>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((cartItem) => (
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={cartItem.thumbnail}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{cartItem.title}</div>
                      <div className="text-sm opacity-50">
                        {cartItem.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="me-4 text-xl">
                    <button onClick={() => changeQuantity(cartItem, "add")}>
                      +
                    </button>
                  </span>
                  {cartItem?.quantity}
                  <span className="ms-4 text-xl">
                    <button
                      onClick={() => changeQuantity(cartItem, "subtract")}
                    >
                      -
                    </button>
                  </span>

                  <br />
                </td>
                <td>{cartItem.cartPrice.toFixed(2)}</td>
                <th>
                  <button className="btn btn-accent btn-xs">Checkout</button>
                </th>
              </tr>
            ))}
            {/* row final */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      {/* <img
                        src="/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      /> */}
                    </div>
                  </div>
                  <div>
                    {/* <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div> */}
                  </div>
                </div>
              </td>
              <td>
                Total Items: {cartItemsQuantity}
                <br />
                {/* <span className="badge badge-ghost badge-sm">
                  Tax Accountant
                </span> */}
              </td>
              <td className="text-green-500 font-semibold">
                Total: ${cartItemsPrice.toFixed(2)}
              </td>
              <th>
                {/* <button className="btn btn-ghost btn-xs">details</button> */}
              </th>
            </tr>
          </tbody>
          {/* foot */}
        </table>
      </div>
    </Layout>
  );
};

export default Cart;
