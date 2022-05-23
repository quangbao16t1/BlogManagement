import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './Footer.css';
import logo from './logo.png';
import {
    PhoneFilled,
    GoogleCircleFilled,
    FacebookFilled,
    YoutubeFilled,
    InstagramFilled
}
    from '@ant-design/icons';

const Footer = () => {
    const { Footer } = Layout;
    return (
        <>
            <Layout>
                <Footer className='footer'>
                    <section className='footer-top'>
                        <ul>
                            <li>
                                <h3>Trợ giúp</h3>
                            </li>
                            <li>
                                <a>Trung tâm trợ giúp</a>
                            </li>
                            <li>
                                <a> Diễn đàn trợ giúp</a>
                            </li>
                            <li>
                                <a> Bài hướng dẫn bằng video</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h3>Cộng đồng</h3>
                            </li>
                            <li>
                                <a>Blogger Buzzp</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h3>Nhà phát triển</h3>
                            </li>
                            <li>
                                <a>API Blogger</a>
                            </li>
                            <li>
                                <a>Diễn đàn nhà phát triển</a>
                            </li>
                        </ul>
                    </section>
                    <div className='footer-middle'>
                        <div className='footer-span1'>
                            <aside className='footer-logo'>
                                <a>
                                    <img src={logo} />
                                </a>
                            </aside>
                        </div>
                        <div className='footer-span2'>
                            <h1 className='footer-title'>VỀ CHÚNG TÔI</h1>
                            <aside className='footer-text'>

                                <br />
                                <p>WEBICO Blog là chuyên trang chia sẻ các kiến thức về marketing online,
                                    kiếm tiền online, bán hàng online, khởi nghiệp,
                                    kiến thức website nhằm mang lại cho người dùng
                                    cũng như các khách hàng những kiến thức bổ ích và chính xác nhất.</p>
                            </aside>
                        </div>
                        <div className='footer-span3'>
                            <h1 className='footer-title'>THEO DÕI CHÚNG TÔI</h1>
                            <aside className='footer-icon'>
                                <i><PhoneFilled /></i>
                                <i><GoogleCircleFilled /></i>
                                <i><FacebookFilled /></i>
                                <i><YoutubeFilled /></i>
                                <i><InstagramFilled /></i>
                            </aside>
                        </div>
                    </div>

                </Footer>
            </Layout>
        </>
    )
}

export default Footer;