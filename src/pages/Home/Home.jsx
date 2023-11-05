import React from "react";

import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import Featured from "../../components/Featured/Featured";

const Home = () => {
    return (
        <div>
            <Hero />
            <Categories />
            <Featured />
        </div>
    );
};

export default Home;
