import React from "react";
import "./login.css";

const LoginForm = (props) => {
    return (
        <div className="form-warp">
            <form onSubmit={props.handleSubmit}>
                <input type="email" required="true" className="form-input" name="email" placeholder="Enter email">
                </input>
                <input type="password" required="true" className="form-input" name="password" placeholder="Enter password"
                ></input>
            </form>
        </div>
    )
};

export default LoginForm;