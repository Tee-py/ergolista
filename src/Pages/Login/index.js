import React from "react";
import LoginForm from "./components/form";



const Login = () => {

    const initialValues = {
        email: "",
        password: ""
    }

    const formValidate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        } else if (values.password==="") {
            errors.password = "Password is Required"
        }
        return errors;
    }

    const handleFormSubmit = values => {
        console.log(values);
    }
    return(
        <LoginForm 
            initialValues={initialValues}
            formValidate={formValidate}
            handleFormSubmit={handleFormSubmit}
        />
    )
};

export default Login;