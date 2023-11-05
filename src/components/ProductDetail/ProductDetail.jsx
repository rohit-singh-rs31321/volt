import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContext";
import Product from "../Product/Product";
import { FaHeart } from "react-icons/fa";

import "./ProductDetail.scss";
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";
import { addCart } from "../../utilities/add-cart";
import { addWishlist } from "../../utilities/add-wishlist";
import { removeWishlist } from "../../utilities/remove-wishlist";

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    const { stateProduct, dispatchProduct } = useProduct();
    const { loading, products } = stateProduct;

    const {
        stateCart: { myCart, myWishlist },
        dispatchCart,
    } = useCart();

    const { stateAuth } = useAuth();

    const clickedProduct = products.find(
        (product) => product._id === productId
    );

    const checkItem = (id) => {
        if (myCart.find((item) => item._id === id)) {
            return true;
        }
        return false;
    };

    const checkWishlist = (id) => {
        if (myWishlist.find((item) => item._id === id)) {
            return true;
        }
        return false;
    };

    return (
        <div className="main product_detail_main">
            <div className="product-img">
                <img src={clickedProduct.img} alt="" />
            </div>
            <div className="product-details">
                <div className="product-gender">{clickedProduct.gender}</div>
                <div className="product-title">{clickedProduct.title}</div>
                <div className="product-description">
                    {clickedProduct.details}
                </div>
                <div className="product-rating">
                    Rating: {clickedProduct.rating}
                    <span className="stars">&#9733;</span>
                </div>
                <div className="product-price">
                    Price: ₹ {clickedProduct.price}
                </div>
                <div className="product-cta">
                    {stateAuth.isAuth ? (
                        checkItem(clickedProduct._id) ? (
                            <div
                                className="btn add"
                                onClick={() => navigate("/cart")}
                            >
                                Go to cart
                            </div>
                        ) : checkWishlist(clickedProduct._id) ? (
                            <div
                                className="btn add"
                                onClick={() => {
                                    addCart(clickedProduct, dispatchCart);
                                    removeWishlist(
                                        clickedProduct._id,
                                        dispatchCart
                                    );
                                }}
                            >
                                Add to Cart
                            </div>
                        ) : (
                            <div
                                className="btn add"
                                onClick={() =>
                                    addCart(clickedProduct, dispatchCart)
                                }
                            >
                                Add to Cart
                            </div>
                        )
                    ) : (
                        <div
                            className="btn add"
                            onClick={() => {
                                navigate("/login");
                            }}
                        >
                            Add to Cart
                        </div>
                    )}
                    <div className="btn wish_btn">
                        {stateAuth.isAuth ? (
                            <FaHeart
                                id="wish"
                                className={`wish ${
                                    checkWishlist(clickedProduct._id) && `added`
                                }`}
                                onClick={() =>
                                    checkWishlist(clickedProduct._id)
                                        ? removeWishlist(
                                              clickedProduct._id,
                                              dispatchCart
                                          )
                                        : addWishlist(
                                              clickedProduct,
                                              dispatchCart
                                          )
                                }
                            />
                        ) : (
                            <FaHeart
                                className="wish"
                                id="wish"
                                onClick={() => navigate("/login")}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
