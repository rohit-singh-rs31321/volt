import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";

const Error = () => {
    return (
        <div className="container">
            <div className="error_container">
                <h3 className="error-info">ERROR 404 - PAGE NOT FOUND</h3>
                <h2 className="error-subtitle">OH HEY...</h2>
                <h1 className="error-title">THIS IS AWKWARD</h1>
                <p className="error-message">
                    Apparently this page took the day off to go feed its shoe
                    addiction and is probably buried under a skyscrapper of
                    sneakers and studs at the moment. <br />
                    That's our bad... would you like to go back?
                </p>
                <Link to="/" className="go_back_btn">
                    Go back home
                </Link>
                <div className="error_image">
                    <img
                        src={`${require("../../assets/images/error.png")}`}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Error;
