import axios from "axios";

export const loadWishlist = async (dispatchCart) => {
    const newToken = localStorage.getItem("token");
    try {
        const response = await axios({
            method: "GET",
            url: "/api/user/wishlist",
            headers: {
                authorization: newToken,
            },
        });
        if (response.status === 200) {
            dispatchCart({
                type: "ADD_TO_WISHLIST",
                payload: response.data.wishlist,
            });
        }
    } catch (e) {
        console.log("Error: ", e);
    }
};
