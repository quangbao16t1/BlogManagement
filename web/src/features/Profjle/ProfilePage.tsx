import './ProfilePage.css'
import girlImg from './girl.jpg';
import { Button, Col, Divider, Input, Modal, Row, Select } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Form, { useForm } from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import "antd/dist/antd.css"

interface DescriptionItemProps {
    title: string;
    content: React.ReactNode;
}

const DescriptionItem = ({ title, content }: DescriptionItemProps) => {
    return (
        <div className="site-description-item-profile-wrapper">
            <p className="site-description-item-profile-p-label">{title}:</p>{content}
        </div>
    )
};

const ProfilePage = () => {
    const [modal2Visible, setModal2Visible] = useState(false);

    const handelFormSubmit = (value: any) => {
        console.log(value)
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

    const { Option } = Select;
    const [form] = useForm();
    return (

        <div className='clear-container'>
            <h1
                className="title-profile"
                style={{
                    marginBottom: '50px',
                }}
            >
                User Profile
            </h1>
            <div className="avatar">
                <img
                    onClick={() => setModal2Visible(true)}
                    src={girlImg}
                    className="card-img-top"
                    alt=""
                />
                <Button onClick={() => setModal2Visible(true)}><FormOutlined /></Button>
                <Modal
                    title="Edit Profile"
                    style={{marginTop: '50px'}}
                    visible={modal2Visible}
                    onOk={() => handelFormSubmit}
                    onCancel={() => setModal2Visible(false)}
                >
                    <Form
                        name="formLogin"
                        form={form}
                        {...formItemLayout}
                        className="login-form"
                        scrollToFirstError
                        // onFinish={handelSubmit}
                    >
                        <FormItem
                            label="First Name"
                            className="form-item-name"
                            name={"firstName"}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your fist name!',
                                },
                            ]}
                        >
                            <Input className="input-name" />
                        </FormItem>
                        <FormItem
                            className="form-item-name"
                            name={"lastName"}
                            label="Last Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your last name!',
                                },
                            ]}
                        >
                            <Input className="input-name" />

                        </FormItem>

                        <FormItem
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
                            <Input className="input-filed" disabled />
                        </FormItem>

                        <FormItem
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
                        </FormItem>

                        <FormItem
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
                        </FormItem>

                        <FormItem label="Gender" required={true} className="form-item-name"  >
                            <Row gutter={8}>
                                <Col span={10}>
                                    <FormItem
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
                                    </FormItem>
                                </Col>
                            </Row>
                        </FormItem>
                    </Form>
                </Modal>
            </div>

            <p className="site-description-item-profile-p">Personal</p>
            <Divider />
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Full Name" content="Lily" />
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Account" content="AntDesign@example.com" />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="City" content="HangZhou" />
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Country" content="China🇨🇳" />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Birthday" content="February 2,1900" />
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Website" content="-" />
                </Col>
            </Row>

            <Divider />

            <p className="site-description-item-profile-p">Contacts</p>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Email" content="AntDesign@example.com" />
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <DescriptionItem
                        title="Github"
                        content={
                            <a href="http://github.com/ant-design/ant-design/">
                                github.com/ant-design/ant-design/
                            </a>
                        }
                    />
                </Col>
            </Row>
        </div>
    )
}

export default ProfilePage;