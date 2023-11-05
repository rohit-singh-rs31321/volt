import axios from "axios";

export const loadProducts = async (dispatch) => {
    try {
        dispatch({
            type: "LOAD_PRODUCTS",
        });

        const response = await axios.get("/api/products");
        if (response.status === 200) {
            dispatch({
                type: "LOAD_PRODUCTS_SUCCESS",
                payload: response.data.products,
            });
        }
    } catch (e) {
        dispatch({
            type: "LOAD_FAIL",
        });
    }
};
