import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome, AiOutlineDownSquare } from "react-icons/ai";
import { GoListUnordered } from "react-icons/go";
import "./Sidebar.scss";

const Sidebar = () => {
    const [showMobile, setShowMobile] = useState(false);

    return (
        <section className="user-sidebar">
            <div className="mobile">
                <h2>My Account</h2>

                <AiOutlineDownSquare
                    className="expand__btn"
                    onClick={() => setShowMobile((showMobile) => !showMobile)}
                />
            </div>

            <div className={`options ${showMobile ? "show" : "hide"}`}>
                <ul>
                    <li>
                        <NavLink to={"/user/profile"} className="nav__link">
                            <CgProfile className="icon" /> Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/user/address"} className="nav__link">
                            <AiOutlineHome className="icon" />
                            Addresses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/notes/archive"} className="nav__link">
                            <GoListUnordered
                                className="icon"
                                style={{ fontsize: "2rem" }}
                            />
                            Orders
                        </NavLink>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Sidebar;
