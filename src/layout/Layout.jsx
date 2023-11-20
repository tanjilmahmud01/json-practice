import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
