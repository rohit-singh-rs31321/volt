import { createContext, useContext, useReducer } from "react";

import { ProductReducer } from "../Reducers/ProductReducer";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
    const [stateProduct, dispatchProduct] = useReducer(ProductReducer, {
        loading: false,
        products: [],
    });

    return (
        <ProductContext.Provider value={{ stateProduct, dispatchProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
