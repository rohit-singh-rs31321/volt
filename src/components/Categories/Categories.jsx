import React from "react";
import "./Categories.scss";
import { categories } from "../../fakeData";
import CategoryItem from "./CategoryItem";

const Categories = () => {
    return (
        <div className="categories_container container">
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Categories;
