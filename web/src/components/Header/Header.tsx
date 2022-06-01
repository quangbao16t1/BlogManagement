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
import { useEffect, useState } from 'react';
import StorageKeys from 'constants/storage-keys';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const { Header } = Layout;
    const [user, setUser] = useState();


    const logout =async () => {
        await localStorage.clear();
        navigate('/login');
    }

    useEffect(() => {
        const userString = localStorage.getItem(StorageKeys.user);
        if (userString) {
            const userss = (JSON.parse(userString));
            setUser(userss);
        }
    }, [StorageKeys.user]);

    console.log(user);

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
        }
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
                    {!user ? <div className='btn-header'>
                        <Space className='btn-header'>
                            <Button type="primary" onClick={() => navigate('/register')}>Sign up</Button>
                            <Button type='primary' onClick={() => navigate('/login')}>Sign in</Button>
                        </Space>
                    </div>
                        : <div className='account'>
                            <p>Hi, {user['firstName']} </p>
                            <div className="avatar">
                                <div className="avatar-img">
                                    <img src={girlImg} />
                                    <Button
                                        type='primary'
                                        className='logout'
                                        onClick={logout}
                                    >
                                        <i> <LogoutOutlined /> </i>
                                        Logout
                                    </Button>
                                </div>
                            </div>
                        </div>}

                </Header>
            </Layout>
        </>
    );
}

export default Header;