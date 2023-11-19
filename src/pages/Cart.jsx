import React, { useContext } from "react";
import Layout from "../layout/Layout";
import { ProductContext } from "../context/ProductContext";

const Cart = () => {
  const { cart } = useContext(ProductContext);

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
                  {cartItem?.quantity}
                  <br />
                </td>
                <td>{cartItem.cartPrice.toFixed(2)}</td>
                <th>
                  <button className="btn btn-accent btn-xs">Checkout</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </Layout>
  );
};

export default Cart;
