import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import { ProductContext } from "../context/ProductContext";
import Layout from "../layout/Layout";

const SingleProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(ProductContext);

  const [productData, setProductData] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  console.log("In the Details: ", productData);

  return (
    <Layout>
      <div className="flex flex-col md:flex-col lg:flex-row gap-4 justify-center  container mx-auto">
        <div className="w=[100%]">
          <img src={productData.thumbnail} alt="image picture" />
        </div>
        <div className="w-full md:w-full lg:w-1/2 ">
          <p className="text-4xl font-semibold flex items-center gap-3">
            {productData.title}{" "}
            <span className="badge badge-accent">{productData.category}</span>
          </p>
          <p className="text-xl mt-5">{productData.description}</p>
          <s className="text-2xl font-semibold text-gray-500 mt-5">
            ${productData.price}{" "}
          </s>
          <span className="text-green-500 font-semibold text-2xl ms-4">
            {productData.discountPercentage}% discount
          </span>
          <div className="mt-5">
            Rating: {productData.rating}
            <StarRating rating={productData?.rating}></StarRating>
          </div>

          {productData.stock === 0 ? <p>Not Available</p> : <p>In Stock</p>}
          <button
            onClick={() => addToCart(productData)}
            disabled={productData.stock === 0}
            className="btn btn-secondary hover:text-white transition duration-500 bg-green-400 mt-5"
          >
            add to cart
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProductDetails;
