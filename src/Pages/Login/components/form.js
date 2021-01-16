import React from "react";
import { Formik, /*useFormikContext*/ } from "formik";
import { Input, Form, SubmitButton } from 'formik-antd';
import { Alert, Button, Space, Row, Col } from "antd";



const LoginForm = (props) => {
    return (
        <Formik
        initialValues={props.initialValues}
        validate={props.formValidate}
        onSubmit={props.handleFormSubmit}
        validateOnMount={true}
        >
        {({
            isValid,
            handleSubmit,
        }) => (
            <Row align="middle" justify="center" style={{height: "100vh"}}>
                <Col xs={{ span: 24}} md={{ span:12 }} lg={{ span: 8}}>
                    <Form onSubmit={{handleSubmit}} style={{padding: "2rem"}}>
                        <Row gutter={[24, 24]}>
                            <Col xs={{ span: 24}} md={{ span:24 }} lg={{ span: 24}}>
                                <Input name="email" type="email" placeholder="Enter email" size="large" />
                            </Col>
                        </Row>
                        <Row gutter={[24, 24]}>
                            <Col xs={{ span: 24}} md={{ span:24 }} lg={{ span: 24}}>
                                <Input name="password" type="password" placeholder="Enter password" size="large" />
                            </Col>
                        </Row>
                        <Row gutter={[24, 24]}>
                            <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                            <SubmitButton
                                style={{backgroundColor: "#4287f5"}}
                                block
                                disabled={!isValid}
                                size="large"
                            >
                                Login
                            </SubmitButton>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row> 
        )}
        </Formik>
    )
};

export default LoginForm;