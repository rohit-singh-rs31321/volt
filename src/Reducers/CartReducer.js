export const cartReducer = (stateCart, actionCart) => {
    switch (actionCart.type) {
        case "ADD_TO_WISHLIST":
            return { ...stateCart, myWishlist: actionCart.payload };

        case "ADD_TO_CART":
            return {
                ...stateCart,
                myCart: actionCart.payload,
            };

        case "REMOVE_FROM_CART":
            return {
                ...stateCart,
                myCart: actionCart.payload,
            };

        case "DROP_EVERYTHING":
            return { ...stateCart, myWishlist: [], myCart: [] };

        default:
            return stateCart;
    }
};
