import React from "react";
import { FaHeart } from "react-icons/fa";

import "./Product.scss";

import { notifyRequestLogin } from "../../utilities/notifications";

import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { addWishlist } from "../../utilities/add-wishlist";
import { removeWishlist } from "../../utilities/remove-wishlist";
import { addCart } from "../../utilities/add-cart";

const Product = ({ product, id, title, image, details, rating, price }) => {
    const navigate = useNavigate();

    const {
        stateCart: { myWishlist, myCart },
        dispatchCart,
    } = useCart();

    const { stateAuth } = useAuth();

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
        <div className="product_card">
            <img src={image} alt={title} />
            {stateAuth.isAuth ? (
                <FaHeart
                    id="wish"
                    className={`wish ${checkWishlist(id) && `added`}`}
                    onClick={() => {
                        if (checkWishlist(id)) {
                            removeWishlist(id, dispatchCart);
                        } else {
                            addWishlist(product, dispatchCart);
                        }
                    }}
                />
            ) : (
                <FaHeart
                    className="wish"
                    id="wish"
                    onClick={() => {
                        notifyRequestLogin();
                        navigate("/login");
                    }}
                />
            )}

            <div
                className="product_details"
                onClick={() => {
                    navigate(`/products/${id}`);
                }}
            >
                <p className="title">{title}</p>
                <p className="details">{details}</p>
                <div className="rating">
                    {rating}
                    <span className="stars">&#9733;</span>
                </div>
                <p className="price">₹ {price}</p>
            </div>

            {stateAuth.isAuth ? (
                checkItem(id) ? (
                    <div className="add" onClick={() => navigate("/cart")}>
                        Go to cart
                    </div>
                ) : checkWishlist(id) ? (
                    <div
                        className="add"
                        onClick={() => {
                            removeWishlist(id, dispatchCart);
                            addCart(product, dispatchCart);
                        }}
                    >
                        Add to Cart
                    </div>
                ) : (
                    <div
                        className="add"
                        onClick={() => {
                            addCart(product, dispatchCart);
                        }}
                    >
                        Add to Cart
                    </div>
                )
            ) : (
                <div
                    className="add"
                    onClick={() => {
                        notifyRequestLogin();
                        navigate("/login");
                    }}
                >
                    Add to Cart
                </div>
            )}
        </div>
    );
};

export default Product;
