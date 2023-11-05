import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import {
    FaSearch,
    FaUser,
    FaHeart,
    FaShoppingCart,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useScrollToChangeColor } from "../../hooks/scroll-to-change";
import "./Navbar.scss";
import { useFilter } from "../../contexts/FilterContext";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const showMenu = () => setMenu(!menu);

    const [navItemColor, setNavItemColor] = useState("#f8fafc");
    const location = useLocation();

    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    const { dispatch } = useFilter();
    const { stateAuth, dispatchAuth } = useAuth();
    const {
        stateCart: { myWishlist, myCart },
        dispatchCart,
    } = useCart();

    const handleLogout = () => {
        dispatchAuth({ type: "USER_LOGOUT" });
        dispatchCart({ type: "DROP_EVERYTHING" });
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "SEARCH_TERM", payload: searchTerm });
        setSearchTerm("");
        navigate("/products");
    };

    useEffect(() => {
        if (window.location.pathname !== "/") {
            setNavItemColor("#2d3748");
        } else {
            setNavItemColor("#cbd5e1");
        }
    }, [location]);

    useScrollToChangeColor();

    return (
        <header className="header" id="header">
            <div className="navbar container">
                <div className="left">
                    <FaBars
                        className="nav-toggle icons"
                        id="nav-toggle"
                        onClick={showMenu}
                        style={{ color: navItemColor }}
                    />
                    <Link
                        to="/"
                        className="nav__logo"
                        style={{ color: navItemColor }}
                    >
                        Volt
                    </Link>
                </div>

                <nav className={menu ? "show-menu open" : "show-menu"}>
                    <ul className="nav_menu">
                        <li>
                            <NavLink to={"/"} className="nav__link">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/products"} className="nav__link">
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <form
                                className="search_container"
                                onSubmit={handleSubmit}
                            >
                                <input
                                    placeholder="Search here"
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                                <FaSearch
                                    className="search__icon"
                                    onClick={handleSubmit}
                                />
                            </form>
                        </li>
                    </ul>

                    <FaTimes
                        className="nav__close"
                        id="nav-close"
                        onClick={showMenu}
                    />
                </nav>

                <div className="nav_btns">
                    {stateAuth.isAuth ? (
                        <NavLink to={"/user"}>
                            <FaUser
                                className="user icons"
                                style={{ color: navItemColor }}
                            />
                        </NavLink>
                    ) : (
                        <NavLink to={"/login"}>
                            <FaUser
                                className="user icons"
                                style={{ color: navItemColor }}
                            />
                        </NavLink>
                    )}

                    {stateAuth.isAuth ? (
                        <NavLink to={"/wishlist"} className="badge">
                            <FaHeart
                                className="heart icons"
                                style={{ color: navItemColor }}
                            />
                            {myWishlist.length !== 0 ? (
                                <div className="number rounded top-right">
                                    {myWishlist.length}
                                </div>
                            ) : (
                                <></>
                            )}
                        </NavLink>
                    ) : (
                        <NavLink to={"/login"} className="badge">
                            <FaHeart
                                className="heart icons"
                                style={{ color: navItemColor }}
                            />
                        </NavLink>
                    )}

                    {stateAuth.isAuth ? (
                        <NavLink to={"/cart"} className="badge">
                            <FaShoppingCart
                                className="nav_cart icons"
                                style={{ color: navItemColor }}
                            />
                            {myCart.length !== 0 ? (
                                <div className="number rounded top-right">
                                    {myCart.length}
                                </div>
                            ) : (
                                <></>
                            )}
                        </NavLink>
                    ) : (
                        <NavLink to={"/login"} className="badge">
                            <FaShoppingCart
                                className="nav_cart icons"
                                style={{ color: navItemColor }}
                            />
                        </NavLink>
                    )}

                    {stateAuth.isAuth ? (
                        <FiLogOut
                            className="logout_icon icons"
                            style={{ color: navItemColor }}
                            onClick={handleLogout}
                        />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
