import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp.js";
import Error from "../Pages/Error";
import Product from "../Pages/Product";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/error" element={<Error />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
