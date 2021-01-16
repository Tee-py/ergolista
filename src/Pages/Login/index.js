import React from "react";
import { Input, Form, SubmitButton } from 'formik-antd';
import { Row, Col } from 'antd';
import { Formik, /*useFormikContext*/ } from "formik";
//import { Alert, Button, Space, Input } from "antd";
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
        }
        return errors;
    }

    const handleFormSubmit = values => {
        console.log(values);
    }
    return(
        <Formik
        initialValues={initialValues}
        validate={formValidate}
        onSubmit={handleFormSubmit}
        validateOnMount={true}
        >
        {({
            isValid,
            handleSubmit,
        }) => (
            <Form onSubmit={{handleFormSubmit}}>
                <Row gutter={[24, 24]}>
                    <Col xs={{ span: 24}} md={{ span:12 }} lg={{ span: 8}}></Col>
                    <Col xs={{ span: 24}} md={{ span:12 }} lg={{ span: 8}}>
                        <Input name="email" type="email" placeholder="Enter email" size="large" />
                    </Col>
                </Row>
                <Row gutter={[24, 24]}>
                    <Col xs={{ span: 24}} md={{ span:12 }} lg={{ span: 8}}></Col>
                    <Col xs={{ span: 24}} md={{ span:12 }} lg={{ span: 8}}>
                        <Input name="password" type="password" placeholder="Enter password" size="large" />
                    </Col>
                </Row>
                <Row gutter={[24, 24]}>
                    <Col xs={{ span: 24}} md={{ span:12 }} lg={{ span: 8}}></Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                      <SubmitButton
                        type="danger"
                        block
                        disabled={!isValid}
                      >
                        Submit
                      </SubmitButton>
                    </Col>
                </Row>
            </Form> 
        )}
        </Formik>
    )
};

export default Login;