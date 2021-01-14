import React from "react";
import { Form, Input, SubmitButton } from 'formik-antd';
import { Row, Col } from 'antd';
import { Formik, /*useFormikContext*/ } from "formik";
import { Alert, Button, Space } from "antd";




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
            <Row align="middle">
                <Col span={12} offset={6}>
                    <Form onSubmit={handleSubmit}>
                        
                        <Input
                            name="emailAddress"
                            placeholder="Email Address"
                            size="large"
                        />
                        <Input.Password
                            name="password"
                            placeholder="Password"
                            size="large"
                        />
                        <SubmitButton
                            type="primary"
                            block
                            size="large"
                            className="mt-10"
                        >
                            SIGN IN
                        </SubmitButton>
                        <Button
                            type="link"
                            block
                            size="middle"
                            style={{ marginTop: "6px" }}
                        >
                            Forgot Password ?
                        </Button>
                    </Form>
                </Col>
            </Row>
        )}
        </Formik>
    )
};

export default Login;