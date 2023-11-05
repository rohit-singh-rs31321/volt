import React from "react";
import "./Hero.scss";
import { CgArrowLongDown } from "react-icons/cg";

const Hero = () => {
    return (
        <div className="container">
            <div className="hero-img"></div>

            <section className="hero">
                <h1 className="hero__title">
                    Regain your confidence on the court.
                </h1>
                <p>Take your game to the next level.</p>
                <CgArrowLongDown className="down__arrow" />
            </section>
        </div>
    );
};

export default Hero;
