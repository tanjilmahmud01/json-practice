import React, { useContext } from "react";
import StarRating from "./StarRating";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  //   console.log(product);

  const { addToCart } = useContext(ProductContext);

  // console.log("modified product: ", addedProduct);

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="h-[200px]">
        <img src={product.thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.title}
          <div className="badge badge-secondary">{product.category}</div>
        </h2>
        <p>{product.description}</p>
        <div className="flex gap-4">
          <s className="text-2xl text-gray-500">${product.price}</s>
          <span className="text-2xl font-semibold text-green-500">
            $
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}
          </span>
        </div>

        <div className="flex items-center mb-4">
          <p>Rating: {product.rating}</p>
          <StarRating rating={product.rating}></StarRating>
        </div>

        <div className="card-actions justify-end">
          <div
            onClick={() => addToCart(product)}
            className="btn btn-accent hover:text-white bg-green-400 transition duration-500"
          >
            Add to Cart
          </div>
          <Link to={`/products/${product.id}`}>
            <div className="btn btn-accent hover:text-white bg-green-400 transition duration-500">
              See Details
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
