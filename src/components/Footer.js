import React from 'react';
import { Typography } from 'antd';
import "./Footer.css";

const Footer = () => {

    const { Title } = Typography
    return (
        <footer className="footer">
            <Title level={5}>Copyright &#169; 2021 Crystal's Pages All Rights Reserved.</Title>
        </footer>
    )
}

export default Footer
