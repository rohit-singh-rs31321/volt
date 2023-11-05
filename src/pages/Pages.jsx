import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Wishlist from "./Wishlist/Wishlist";
import Cart from "./Cart/Cart";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Error from "./Error/Error";
import User from "./User/User";

const Pages = () => {
    return (
        <Routes>
            <Route exact={true} path="/" element={<Home />} />

            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default Pages;
