import React from 'react';
import { Card } from 'antd';
import './Account.css';

const Account = () => {
    return (
        <div className="account_page">
            <Card className="account_card" title="Your Account">
                <p>Username:</p>
                <p>Email:</p>
            </Card>
        </div>
    )
}

export default Account
