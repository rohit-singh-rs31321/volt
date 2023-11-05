import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../Reducers/CartReducer";
import { loadWishlist } from "../utilities/load-wishlist";
import { loadCart } from "../utilities/load-cart";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
    useEffect(() => {
        loadWishlist(dispatchCart);
        loadCart(dispatchCart);
    }, []);

    const [stateCart, dispatchCart] = useReducer(cartReducer, {
        /**
         * Feature to be added: set initial data from local storage
         *
         * const userDetails = JSON.parse(localStorage.getItem("user"));
         * myWishlist: userDetails.wishlist.length ? userDetails.wishlist : [],
         * myCart: userDetails.cart.length ? userDetails.cart : [],
         *
         * */

        myWishlist: [],
        myCart: [],
        quantity: 0,
    });

    return (
        <CartContext.Provider value={{ stateCart, dispatchCart }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
