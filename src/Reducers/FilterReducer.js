export const filterReducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_TERM":
            return { ...state, searchTerm: action.payload };
        case "LOW_TO_HIGH":
            return { ...state, sortBy: action.type };
        case "HIGH_TO_LOW":
            return { ...state, sortBy: action.type };

        case "MEN":
            return { ...state, gender: action.type };
        case "WOMEN":
            return { ...state, gender: action.type };
        case "KIDS":
            return { ...state, gender: action.type };

        case "RATING":
            return { ...state, rating: action.rating_value };

        case "NIKE":
            return {
                ...state,
                brands: {
                    ...state["brands"],
                    nike: !state.brands.nike,
                },
            };
        case "ADIDAS":
            return {
                ...state,
                brands: {
                    ...state["brands"],
                    adidas: !state.brands.adidas,
                },
            };
        case "PUMA":
            return {
                ...state,
                brands: {
                    ...state["brands"],
                    puma: !state.brands.puma,
                },
            };
        case "VANS":
            return {
                ...state,
                brands: {
                    ...state["brands"],
                    vans: !state.brands.vans,
                },
            };

        case "CLEAR":
            return {
                sortBy: "",
                gender: "",
                rating: 1,
                brands: {
                    nike: false,
                    adidas: false,
                    puma: false,
                    vans: false,
                },
                searchTerm: "",
            };

        default:
            return state;
    }
};
