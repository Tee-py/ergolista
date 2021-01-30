import React, { useState } from "react";
import LoginForm from "./components/form";
import { useHistory } from "react-router-dom";
import { loginUserRequest } from "../../network/auth";

const Login = () => {

    const initialValues = {
        email: "",
        password: ""
    }

    let history = useHistory();

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
        }
        return errors;
    }

    const handleFormSubmit = values => {
        return loginUserRequest(values)
            .then(
                res=>{
                    setFeedBack({message: "Login Successfull", type: "success"}); 
                    //console.log(res.data)
                    sessionStorage.setItem("userData", JSON.stringify(res.data));
                    setTimeout(()=>history.push("/dashboard"), 2000);
                    
                }, 
                err=>{
                    console.log(err); 
                    setFeedBack({message: "An Error Occured", type: "error"})
                }
            );
        }
    return(
        <LoginForm 
            initialValues={initialValues}
            formValidate={formValidate}
            handleFormSubmit={handleFormSubmit}
            feedBack={feedBack}
        />
    )
};

export default Login;