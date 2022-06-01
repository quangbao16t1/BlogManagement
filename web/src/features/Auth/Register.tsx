import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const { Option } = Select;

    const register = () => {

    }
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };
    return (
        <body>
            <div className="container">
                <h1>Register</h1>
                <Form
                    name="formLogin"
                    {...formItemLayout}
                    form={form}
                    className="login-form"
                    scrollToFirstError
                    onFinish={register}
                >
                    <Form.Item label="First Name" required={true} className="form-item-name"  >
                        <Row gutter={8}>
                            <Col span={9}>
                                <Form.Item
                                    name="firstName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your fist name!',
                                        },
                                    ]}
                                >
                                    <Input className="input-name" />
                                </Form.Item>
                            </Col>
                            <Col span={15}>
                                <Form.Item
                                    className="form-item-name"
                                    name="lastName"
                                    label="Last Name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your last name!',
                                        },
                                    ]}
                                >
                                    <Input className="input-name" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item
                        className="form-item"
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input className="input-filed" />
                    </Form.Item>

                    <Form.Item
                        className="form-item"
                        name="passwordHast"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password className="input-filed" />
                    </Form.Item>

                    <Form.Item
                        className="form-item"
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password className="input-filed" />
                    </Form.Item>

                    <Form.Item
                        name="phoneNumber"
                        label="Phone Number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input
                            className="input-filed"
                        />
                    </Form.Item>

                    <Form.Item
                        className="form-item"
                        name="address"
                        label="Address"
                        rules={[
                            {
                                required: true,
                                message: 'Please input address!',
                            },
                        ]}
                    >
                        <Input className="input-filed" />
                    </Form.Item>

                    <Form.Item label="Gender" required={true} className="form-item-name"  >
                        <Row gutter={8}>
                            <Col span={10}>
                                <Form.Item
                                    name="gender"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select gender!',
                                        },
                                    ]}
                                >
                                    <Select className="select-filed" placeholder="select your gender">
                                        <Option value="Male">Male</Option>
                                        <Option value="Female">Female</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={14}>
                                <Form.Item
                                    name="roleId"
                                    label="Role"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select role!',
                                        },
                                    ]}
                                >
                                    <Select className="select-filed" placeholder="select your gender">
                                        <Option value="3">User</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
                <div className="btn-register">
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                    <Button type="primary" onClick={() => navigate('/login')} danger>
                        Cancel
                    </Button>
                </div>
            </div>
        </body>
    );
}

export default Register;