export const ProductReducer = (stateProduct, actionProduct) => {
    switch (actionProduct.type) {
        case "LOAD_PRODUCTS":
            return { ...stateProduct, loading: true };

        case "LOAD_PRODUCTS_SUCCESS":
            return {
                ...stateProduct,
                loading: false,
                products: actionProduct.payload,
            };
        case "LOAD_FAIL":
            return {
                ...stateProduct,
                loading: false,
                products: null,
            };

        default:
            return stateProduct;
    }
};
