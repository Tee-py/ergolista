import React, { useState } from "react";
import RegisterForm from "./components/form";



const Register = () => {

    const initialValues = {
        email: "",
        password: "",
        username: ""
    }

    const [ feedBack, setFeedBack ] = useState({}) 

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
        } else if (values.username==="") {
            errors.username = "Password is Required"
        }
        return errors;
    }

    const handleFormSubmit = values => {
        console.log(values);
        setFeedBack({message: "Registration Successfull", type: "success"});
        return true
    }
    return(
        <RegisterForm 
            initialValues={initialValues}
            formValidate={formValidate}
            handleFormSubmit={handleFormSubmit}
            feedBack={feedBack}
        />
    )
};

export default Register;