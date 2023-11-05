import axios from "axios";
import { notifyAddWishlist, notifyWishlistError } from "./notifications";

export const addWishlist = async (product, dispatchCart) => {
    const newToken = localStorage.getItem("token");
    try {
        const response = await axios({
            method: "POST",
            url: "/api/user/wishlist",
            data: { product: product },
            headers: {
                authorization: newToken,
            },
        });

        if (response.status === 201) {
            /**
             * Feature to be added: change local storage wishlist as per response
             *
             * const userDetails = JSON.parse(localStorage.getItem("user"));
             * userDetails.wishlist = response.data.wishlist;
             * localStorage.setItem("user", JSON.stringify(userDetails));
             *
             */

            notifyAddWishlist();
            dispatchCart({
                type: "ADD_TO_WISHLIST",
                payload: response.data.wishlist,
            });
        }
    } catch (e) {
        notifyWishlistError();
        console.log("Error: ", e);
    }
};
