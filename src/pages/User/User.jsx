import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./User.scss";
const User = () => {
    const userDetails = JSON.parse(localStorage.getItem("user"));
    console.log(userDetails);
    const { firstName, lastName, email } = userDetails;
    return (
        <div className="container">
            <div className="user__container">
                <Sidebar />

                <div className="account__container">
                    <div className="title">Profile</div>
                    <div className="fullname">
                        <strong>Name</strong> : {`${firstName} ${lastName}`}
                    </div>
                    <div className="email">
                        <strong>Email</strong> : {email}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
