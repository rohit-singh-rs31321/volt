import React, { useState } from "react";

import CartProduct from "../../components/CartProduct/CartProduct";
import { useCart } from "../../contexts/CartContext";
import "./Cart.scss";

const Cart = () => {
    const { stateCart } = useCart();
    const { myCart } = stateCart;

    const finalPrice = myCart.reduce(
        (acc, curr) => (acc += curr.price * curr.qty),
        0
    );

    const [discount, setDiscount] = useState(0);

    const finalQuantity = myCart.reduce((acc, curr) => (acc += curr.qty), 0);

    return (
        <main className="main container">
            <section className="contents">
                <div className="title">Items in Cart: {myCart.length}</div>

                {myCart.map((product) => (
                    <CartProduct key={product._id} product={product} />
                ))}
            </section>

            <section className="order__summary">
                <div className="title">
                    Order Summary <br /> {`(${finalQuantity} items)`}
                </div>

                <ul className="summary">
                    <li>
                        Subtotal <span>₹ {finalPrice}</span>
                    </li>
                    <li>
                        Discount{" "}
                        <span className="discount">- ₹ {discount}</span>
                    </li>
                    <li>
                        Delivery Charges <span className="charges">FREE</span>
                    </li>
                </ul>

                <div className="total__price">
                    Total Amount <span>₹ {finalPrice - discount}</span>
                </div>

                <div className="checkout">Checkout</div>
            </section>
        </main>
    );
};

export default Cart;
