import React, { useState } from 'react';
import { Layout, Menu, Switch } from 'antd';
import 'antd/dist/antd.css';
import './Dashboard.css';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    AreaChartOutlined,
    UserOutlined,
    ShopOutlined,
} from '@ant-design/icons';
const { Header, Footer, Content, Sider } = Layout;

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const [theme, setTheme] = useState("dark");
    // let switchText = '';
    // if (theme === "dark") {
    //     switchText += " dark";
    //   } else {
    //     switchText -= " dark";
    //   }
    
      const changeTheme = (value) => {
        setTheme(value ? "dark" : "light");
      };
    return (
        <>
            <Layout className='layout'>
                <Sider className='sider' trigger={null} collapsible collapsed={collapsed} theme={theme}>
                    <div className="logo" />
                    <Menu
                        theme={theme}
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'Users',
                            },
                            {
                                key: '2',
                                icon: <ShopOutlined />,
                                label: 'Bookings',
                            },
                            {
                                key: '3',
                                icon: <AreaChartOutlined />,
                                label: 'Chart',
                            },
                        ]}
                    />
                    <div className="switch-theme">
                        {/* <span className='switch-text'>Switch theme</span> */}
                        <div className='switcher'>
                            <Switch
                                checked={theme === "dark"}
                                onChange={changeTheme}
                                checkedChildren="Dark"
                                unCheckedChildren="Light"
                            />
                        </div>
                    </div>
                </Sider >
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    >
                        {collapsed ? (
                            <MenuUnfoldOutlined className="trigger" onClick={toggle} />
                        ) : (
                            <MenuFoldOutlined className="trigger" onClick={toggle} />
                        )}
                        <div className="account">
                            <h2>
                                Hi, UserName
                            </h2>
                            <div className="avatar">
                                <div className="avatar-img">
                                    <img
                                    />
                                    {/* <button
                                        className="logout"
                                    >
                                        <span>Logout</span>
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        User
                    </Content>
                    <Footer>
                        <div className="copyright">
                            <p>Copyright &copy; 2022</p>
                        </div>
                    </Footer>
                </Layout>
            </Layout>
        </>
    )
}

export default Dashboard;