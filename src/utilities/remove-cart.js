import axios from "axios";
import { notifyRemoveCart } from "./notifications";

export const removeCart = async (id, dispatchCart) => {
    const newToken = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "DELETE",
            url: `/api/user/cart/${id}`,
            headers: {
                authorization: newToken,
            },
        });
        if (response.status === 200) {
            notifyRemoveCart();
            dispatchCart({
                type: "REMOVE_FROM_CART",
                payload: response.data.cart,
            });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
