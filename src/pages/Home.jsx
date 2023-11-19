import React, { useContext } from "react";
import Layout from "../layout/Layout";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import { Audio } from "react-loader-spinner";
import Loader from "../components/Loader";
import MySwiper from "../components/MySwiper";

const Home = () => {
  const { products, loading, setLoading } = useContext(ProductContext);

  return (
    <Layout title={"home"}>
      <MySwiper></MySwiper>
      <div className=" container mx-auto lg:w-[1200px]">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading && <Loader></Loader>}
          {setLoading(false)}
          {products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
