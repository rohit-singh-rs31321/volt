import Product from "../../components/Product/Product";
import { useCart } from "../../contexts/CartContext";
import "./Wishlist.scss";

const Wishlist = () => {
    const { stateCart } = useCart();
    const { myWishlist } = stateCart;

    return (
        <div className="wishlist_container">
            <div className="head">Wishlist</div>
            <div className="items">
                Total Number of items: {myWishlist.length}
            </div>
            <div className="content">
                {myWishlist.map((product) => (
                    <Product
                        product={product}
                        key={product._id}
                        id={product._id}
                        title={product.title}
                        image={product.img}
                        details={product.details}
                        rating={product.rating}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
