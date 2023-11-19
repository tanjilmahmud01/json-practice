import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navbar></Navbar>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
