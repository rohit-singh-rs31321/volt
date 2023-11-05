import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_USER_DETAILS":
            return { ...state, userDetails: action.payload, isAuth: true };

        case "USER_LOGOUT":
            return { ...state, userDetails: [], isAuth: false };

        default:
            return state;
    }
};

const AuthProvider = ({ children }) => {
    const oldToken = localStorage.getItem("token");

    const [stateAuth, dispatchAuth] = useReducer(reducer, {
        userDetails: {},
        token: oldToken ?? null,
        isAuth: oldToken ? true : false,
    });

    return (
        <AuthContext.Provider value={{ stateAuth, dispatchAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
