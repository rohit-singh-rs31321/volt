import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";

export const notifyAddCart = () => {
    toast.success((t) => (
        <span>
            Added to Cart !
            <IoClose
                style={{
                    fontSize: "1.2rem",
                    transform: "translateY(0.2rem) translateX(0.3rem)",
                }}
                className="close-notify"
                onClick={() => toast.dismiss(t.id)}
            />
        </span>
    ));
};

export const notifyRemoveCart = () => {
    toast.error((t) => (
        <span>
            Removed from Cart !
            <IoClose
                style={{
                    fontSize: "1.2rem",
                    transform: "translateY(0.2rem) translateX(0.3rem)",
                }}
                className="close-notify"
                onClick={() => toast.dismiss(t.id)}
            />
        </span>
    ));
};

export const notifyCartError = () => {
    toast.error((t) => (
        <span>
            Unable to add to Cart !
            <IoClose
                style={{
                    fontSize: "1.2rem",
                    transform: "translateY(0.2rem) translateX(0.3rem)",
                }}
                className="close-notify"
                onClick={() => toast.dismiss(t.id)}
            />
        </span>
    ));
};

export const notifyAddWishlist = () => {
    toast.success((t) => (
        <span>
            Added to Wishlist !
            <IoClose
                style={{
                    fontSize: "1.2rem",
                    transform: "translateY(0.2rem) translateX(0.3rem)",
                }}
                className="close-notify"
                onClick={() => toast.dismiss(t.id)}
            />
        </span>
    ));
};

export const notifyRemoveWishlist = () => {
    toast.error((t) => (
        <span>
            Removed from Wishlist !
            <IoClose
                style={{
                    fontSize: "1.2rem",
                    transform: "translateY(0.2rem) translateX(0.3rem)",
                }}
                className="close-notify"
                onClick={() => toast.dismiss(t.id)}
            />
        </span>
    ));
};

export const notifyWishlistError = () => {
    toast.error((t) => (
        <span>
            Unable to add to Wishlist !
            <IoClose
                style={{
                    fontSize: "1.2rem",
                    transform: "translateY(0.2rem) translateX(0.3rem)",
                }}
                className="close-notify"
                onClick={() => toast.dismiss(t.id)}
            />
        </span>
    ));
};

export const notifyAddOneMore = () => {
    toast.success((t) => (
        <span>
            One more shoe added !
            <IoClose
                style={{
                    fontSize: "1.2rem",
                    transform: "translateY(0.2rem) translateX(0.3rem)",
                }}
                className="close-notify"
                onClick={() => toast.dismiss(t.id)}
            />
        </span>
    ));
};

export const notifyRemoveOneMore = () => {
    toast.error((t) => (
        <span>
            One more shoe removed !
            <IoClose
                style={{
                    fontSize: "1.2rem",
                    transform: "translateY(0.2rem) translateX(0.3rem)",
                }}
                className="close-notify"
                onClick={() => toast.dismiss(t.id)}
            />
        </span>
    ));
};

export const notifyRequestLogin = () => {
    toast(
        (t) => (
            <span>
                Please login to use all features !
                <IoClose
                    style={{
                        fontSize: "1.2rem",
                        transform: "translateY(0.2rem) translateX(0.3rem)",
                    }}
                    className="close-notify"
                    onClick={() => toast.dismiss(t.id)}
                />
            </span>
        ),
        {
            icon: "⛔",
        }
    );
};

export const notifyLoginSuccess = () => {
    toast.success((t) => (
        <span>
            Login Successfull !
            <IoClose
                style={{
                    fontSize: "1.2rem",
                    transform: "translateY(0.2rem) translateX(0.3rem)",
                }}
                className="close-notify"
                onClick={() => toast.dismiss(t.id)}
            />
        </span>
    ));
};

export const notifySignupSuccess = () => {
    toast.success((t) => (
        <span>
            SignUp Successfull !
            <IoClose
                style={{
                    fontSize: "1.2rem",
                    transform: "translateY(0.2rem) translateX(0.3rem)",
                }}
                className="close-notify"
                onClick={() => toast.dismiss(t.id)}
            />
        </span>
    ));
};

export const notifyLoginError = () => {
    toast.error((t) => (
        <span>
            <strong>Login Error</strong> : Check email and password again !
            <IoClose
                style={{
                    fontSize: "1.8rem",
                    position: "absolute",
                    right: "1rem",
                    top: "1rem",
                }}
                className="close-notify"
                onClick={() => toast.dismiss(t.id)}
            />
        </span>
    ));
};
