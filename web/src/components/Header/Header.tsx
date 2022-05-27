import { Button, Layout, Menu, Space } from 'antd';
import 'antd/dist/antd.css';
import './Header.css';
import {
    MailOutlined,
    SnippetsOutlined,
    WechatOutlined,
    HomeOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import girlImg from './girl.jpg';
import logo from './logo.png';
import { useState } from 'react';

const Header = () => {
    const { Header } = Layout;
    const items = [
        {
            label: 'Trang Chủ',
            key: 'mail',
            icon: <HomeOutlined />,
        },
        {
            label: 'Bài viết',
            key: 'mail',
            icon: <MailOutlined />,
        },
        // {
        //     label: 'Hỏi Đáp',
        //     key: 'app',
        //     icon: <SnippetsOutlined />,
        // },
        {
            label: 'Thảo Luận',
            key: 'SubMenu',
            icon: <WechatOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'Item 1',
                    children: [
                        {
                            label: 'Option 1',
                            key: 'setting:1',
                        },
                        {
                            label: 'Option 2',
                            key: 'setting:2',
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Item 2',
                    children: [
                        {
                            label: 'Option 3',
                            key: 'setting:3',
                        },
                        {
                            label: 'Option 4',
                            key: 'setting:4',
                        },
                    ],
                },
            ],
        },
        // {
        //     label: (
        //         <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        //             Navigation Four - Link
        //         </a>
        //     ),
        //     key: 'alipay',
        // },
    ];
    // const [current, setCurrent] = useState('mail');

    // const onClick = (e) => {
    //   console.log('click ', e);
    //   setCurrent(e.key);
    // };
    return (
        <>
            <Layout className="layout">
                <Header className='header'>
                    <div className="logo">
                        <img src={logo} />
                    </div>

                    <div>
                        <Menu
                            className='menu-left'
                            theme="dark"
                            mode="horizontal"
                            items={items}
                        // style={{color: "white"}}
                        />
                    </div>
                    {/* <div className='account'>
                        <p>Hi, UserName</p>
                        <div className="avatar">
                            <div className="avatar-img">
                                <img src={girlImg} />
                                <Button type='primary' className='logout'><i> <LogoutOutlined /> </i>Logout</Button>
                            </div>
                        </div>
                    </div> */}

                    <div className='btn-header'>
                        <Space className='btn-header'>
                            <Button type="primary">Sign up</Button>
                            <Button type='primary'>Sign in</Button>
                        </Space>
                    </div>

                </Header>
            </Layout>
        </>
    );
}

export default Header;