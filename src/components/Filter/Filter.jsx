import React from "react";
import { useFilter } from "../../contexts/FilterContext";
import "./Filter.scss";

const Filter = ({ setShowFilter }) => {
    const { state, dispatch } = useFilter();
    const { gender, rating, brands } = state;
    const { nike, adidas, puma, vans } = brands;

    return (
        <>
            <div className="title">
                Filter{" "}
                <button
                    onClick={(e) => {
                        dispatch({ type: "CLEAR" });
                    }}
                >
                    Clear all
                </button>
            </div>
            <div className="subtitle">Gender</div>
            <ul>
                <li>
                    <input
                        type="radio"
                        id="men"
                        name="gender"
                        value="men"
                        checked={gender === "MEN"}
                        onChange={() => {
                            dispatch({
                                type: "MEN",
                            });
                        }}
                    />
                    <label htmlFor="men">Men</label>
                </li>
                <li>
                    {" "}
                    <input
                        type="radio"
                        id="women"
                        name="gender"
                        value="women"
                        checked={gender === "WOMEN"}
                        onChange={() => {
                            dispatch({
                                type: "WOMEN",
                            });
                        }}
                    />
                    <label htmlFor="women">Women</label>
                </li>
                <li>
                    <input
                        type="radio"
                        id="kids"
                        name="gender"
                        value="kids"
                        checked={gender === "KIDS"}
                        onChange={() => {
                            dispatch({
                                type: "KIDS",
                            });
                        }}
                    />
                    <label htmlFor="kids">Kids</label>
                </li>
            </ul>

            <div className="subtitle">Rating</div>
            <div className="price_range">
                <div className="range">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <p key={item}>
                            {item}
                            <sup>⭐</sup>
                        </p>
                    ))}
                </div>
                <div className="slider">
                    <input
                        type="range"
                        className="slider"
                        min={1}
                        max={5}
                        value={rating}
                        onChange={(e) => {
                            dispatch({
                                type: "RATING",
                                rating_value: e.target.value,
                            });
                        }}
                    />
                </div>
            </div>

            <div className="subtitle">Brand</div>
            <ul>
                <li>
                    <input
                        type="checkbox"
                        id="option1"
                        name="nike"
                        checked={nike}
                        onChange={() => {
                            dispatch({ type: "NIKE" });
                        }}
                    />
                    <label htmlFor="option1">Nike</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        id="option2"
                        name="adidas"
                        checked={adidas}
                        onChange={() => {
                            dispatch({ type: "ADIDAS" });
                        }}
                    />
                    <label htmlFor="option2">Adidas</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        id="option3"
                        name="puma"
                        checked={puma}
                        onChange={() => {
                            dispatch({ type: "PUMA" });
                        }}
                    />
                    <label htmlFor="option3">Puma</label>
                </li>
                <li>
                    {" "}
                    <input
                        type="checkbox"
                        id="option4"
                        name="vans"
                        checked={vans}
                        onChange={() => {
                            dispatch({ type: "VANS" });
                        }}
                    />
                    <label htmlFor="option4">Vans</label>
                </li>
            </ul>

            <div className="apply btn" onClick={() => setShowFilter(false)}>
                Apply
            </div>
        </>
    );
};

export default Filter;
