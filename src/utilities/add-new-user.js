import axios from "axios";
import { notifyLoginError, notifySignupSuccess } from "./notifications";

export const addNewUser = async (
    firstName,
    lastName,
    email,
    password,
    dispatchAuth,
    navigate
) => {
    try {
        const response = await axios({
            method: "POST",
            url: "/api/auth/signup",
            data: { firstName, lastName, email, password },
        });
        if (response.status === 201) {
            dispatchAuth({
                type: "GET_USER_DETAILS",
                payload: response.data.createdUser,
            });
            localStorage.setItem("token", response.data.encodedToken);
            localStorage.setItem(
                "user",
                JSON.stringify(response.data.createdUser)
            );
            notifySignupSuccess();
            navigate("/products");
        }
    } catch (e) {
        notifyLoginError();
        console.log("Error: ", e);
    }
};
