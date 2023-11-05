import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { loginUser } from "../../utilities/login-user";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./Auth.scss";

const Login = () => {
    const navigate = useNavigate();
    const { dispatchAuth } = useAuth();

    const EMAIL_REGEX = new RegExp(
        "^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])$"
    );

    const [showPassword, setShowPassword] = useState(false);

    const [userDetail, setUserDetail] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setUserDetail({
            ...userDetail,
            [e.target.name]: e.target.value,
        });
    };

    const { email, password } = userDetail;

    return (
        <main className="auth_container main">
            <div className="split-screen">
                <div className="left">
                    <section className="copy">
                        <h1>Style in every step</h1>
                        <p>
                            Refreshed in an eye-catching colorway that
                            compliments every outfit.
                        </p>
                    </section>
                </div>
                <div className="right">
                    <form>
                        <section className="copy">
                            <h2>Log In</h2>
                        </section>

                        <div className="input__container email">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Type here"
                                id="email"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input__container password">
                            <label htmlFor="password">Password</label>
                            <input
                                placeholder="Must be atleast 8 characters"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                onChange={handleChange}
                            />
                            {showPassword ? (
                                <AiOutlineEye
                                    className="password-eye"
                                    onClick={() =>
                                        setShowPassword(
                                            (prevState) => !prevState
                                        )
                                    }
                                />
                            ) : (
                                <AiOutlineEyeInvisible
                                    className="password-eye"
                                    onClick={() =>
                                        setShowPassword(
                                            (prevState) => !prevState
                                        )
                                    }
                                />
                            )}
                        </div>

                        <div className="input__container-cta">
                            <div className="checkbox">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                />
                                <label htmlFor="remember"> Remember me </label>
                            </div>
                            <Link to={"/"} className="forgot">
                                Forgot your password?
                            </Link>
                        </div>

                        <div
                            className="btn login__btn"
                            onClick={() => {
                                email && password
                                    ? !EMAIL_REGEX.test(email)
                                        ? alert("Please enter a valid email!")
                                        : loginUser(
                                              email,
                                              password,
                                              dispatchAuth,
                                              navigate
                                          )
                                    : alert("Please fill all the fields");
                            }}
                        >
                            Log In
                        </div>

                        <div
                            className="btn login__btn"
                            onClick={() => {
                                loginUser(
                                    "test@gmail.com",
                                    "test",
                                    dispatchAuth,
                                    navigate
                                );
                            }}
                        >
                            Log In as Guest
                        </div>

                        <div className="login__container">
                            <p>
                                Not a Member?
                                <Link to={"/signup"}>
                                    <strong>Sign Up</strong>
                                </Link>
                            </p>
                        </div>

                        <section className="copy legal">
                            <p>
                                <span className="small">
                                    By continuing, you agree to accept our
                                    <br />
                                    <Link to={"/"}>Privacy Policy</Link> &amp;
                                    <Link to={"/"}>Terms of Service</Link>.
                                </span>
                            </p>
                        </section>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Login;
