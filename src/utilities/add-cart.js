import axios from "axios";
import { notifyAddCart, notifyCartError } from "./notifications";

export const addCart = async (product, dispatchCart) => {
    const newToken = localStorage.getItem("token");
    try {
        const response = await axios({
            method: "POST",
            url: "/api/user/cart",
            data: { product },
            headers: {
                authorization: newToken,
            },
        });

        if (response.status === 201) {
            /**
             * Feature to be added: change local storage wishlist as per response
             *
             * const userDetails = JSON.parse(localStorage.getItem("user"));
             * userDetails.cart = response.data.cart;
             * localStorage.setItem("user", JSON.stringify(userDetails));
             *
             */

            notifyAddCart();
            dispatchCart({ type: "ADD_TO_CART", payload: response.data.cart });
        }
    } catch (e) {
        notifyCartError();
        console.log("Error: ", e);
    }
};
