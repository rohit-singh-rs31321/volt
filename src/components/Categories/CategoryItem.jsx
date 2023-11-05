import React from "react";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../contexts/FilterContext";
import "./CategoryItem.scss";

const CategoryItem = ({ item }) => {
    const { dispatch } = useFilter();
    const navigate = useNavigate();

    return (
        <div className="category_item_container">
            <div className="gradient"></div>
            <img src={item.img} alt={item.title} />
            <div className="info">
                <h1 className="title">{item.title}</h1>
                <button
                    onClick={() => {
                        dispatch({ type: item.title.toUpperCase() });
                        navigate("/products");
                    }}
                >
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default CategoryItem;
