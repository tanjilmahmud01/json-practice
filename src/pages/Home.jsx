import React, { useContext } from "react";
import Layout from "../layout/Layout";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import { Audio } from "react-loader-spinner";
import Loader from "../components/Loader";
import MySwiper from "../components/MySwiper";

const Home = () => {
  const { products, loading, setLoading, currentPage, goNextPage, goPrevPage } =
    useContext(ProductContext);

  return (
    <Layout title={"home"}>
      {/* <MySwiper></MySwiper> */}
      <div className=" container mx-auto lg:w-[1200px]">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading && <Loader></Loader>}
          {setLoading(false)}
          {products.slice(0, 9).map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
      <div className="container mx-auto flex justify-between  mt-5 ">
        <button
          onClick={goPrevPage}
          className="btn btn-outline btn-primary ms-10 hover:bg-green-500 transition duration-500"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="btn  text-2xl text-blue-700 hover:bg-green-500 transition duration-500">
          {currentPage}
        </span>

        <button
          onClick={goNextPage}
          disabled={products.length < 10}
          className="btn btn-outline btn-secondary me-10"
        >
          Next
        </button>
      </div>
    </Layout>
  );
};

export default Home;
