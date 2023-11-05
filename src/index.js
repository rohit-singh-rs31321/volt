import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { FilterProvider } from "./contexts/FilterContext";
import { ProductProvider } from "./contexts/ProductContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <ProductProvider>
                <CartProvider>
                    <FilterProvider>
                        <App />
                    </FilterProvider>
                </CartProvider>
            </ProductProvider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
