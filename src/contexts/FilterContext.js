import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducers/FilterReducer";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, {
        sortBy: "",
        gender: "",
        rating: 1,
        brands: { nike: false, adidas: false, puma: false, vans: false },
        searchTerm: "",
    });

    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            {children}
        </FilterContext.Provider>
    );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
