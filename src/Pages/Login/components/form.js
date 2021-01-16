import React from "react";
import "../login.css";

const allStyles = {
    formWrap: {
        display: "flex",
        width: "50%",
        justifyContent: "center",
        flexDirection: "row'",
    },
    inputWrap: {

    },
    formInput: {

    },
    submitButton: {

    }
}

const LoginForm = (props) => {
    return (
        <div className="form-warp">
            <form onSubmit={props.handleSubmit} >
                {/*<div className="input-wrap">
                    <input type="email" required="true" className="form-input" name="email" placeholder="Enter email">
                    </input>
                </div>
                <div className="input-wrap">
                    <input type="password" required="true" className="form-input" name="password" placeholder="Enter password">
                    </input>
                </div>
                <input type="submit" className="sub-btn"></input>*/}
            </form>
            <h1>Hiiiii</h1>
        </div>
    )
};

export default LoginForm;