import React, { useState } from "react";
import RegisterForm from "./components/form";
import { createUserRequest } from "../../network/auth";
import { useHistory } from "react-router-dom";



const Register = () => {

    const initialValues = {
        email: "",
        password: "",
        username: ""
    }

    let history = useHistory()

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
        //console.log(values);
        return createUserRequest(values).then(
            (resp)=>{
                setFeedBack({message: "Account created successfully.", type: "success"});
                setTimeout(()=>history.push("/login"), 2000)
            }, 
            err=>setFeedBack({message: "An Error Occured", type: "error"})
        );
        //return true
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