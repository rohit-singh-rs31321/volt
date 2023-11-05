import axios from "axios";

export const loadCart = async (dispatchCart) => {
    const newToken = localStorage.getItem("token");
    try {
        const response = await axios({
            method: "GET",
            url: "/api/user/cart",
            headers: {
                authorization: newToken,
            },
        });

        if (response.status === 200) {
            dispatchCart({ type: "ADD_TO_CART", payload: response.data.cart });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
