import React from 'react';
import { Card, Typography } from 'antd';
import './Account.css';

const Account = () => {
    const { Title } = Typography;


    return (
        <div className="account_page_container">
            <Card className="account_card" title="Your Account" size="default">
                <Title level={3}>Username:</Title>
                <Title level={3}>Email:</Title>
            </Card>
        </div>
    )
}

export default Account
