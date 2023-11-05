import axios from "axios";

export const quantityCart = async (
    id,
    dispatchCart,
    quantityIncrementDecrement,
    product
) => {
    const newToken = localStorage.getItem("token");

    try {
        const response = await axios({
            method: "POST",
            url: `/api/user/cart/${id}`,

            data: {
                action: {
                    type: quantityIncrementDecrement,
                },
            },

            headers: {
                authorization: newToken,
            },
        });

        if (response.status === 200) {
            dispatchCart({
                type: "ADD_TO_CART",
                payload: response.data.cart,
            });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
