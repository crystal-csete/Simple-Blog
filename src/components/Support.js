import React from 'react';
import { Card, Typography } from 'antd';
import './Support.css';

const Support = () => {
    const { Title } = Typography;


    return (
        <div className="support_container">
            <Card className="support_card" title="FAQ" size="default">
                <Title level={3}>Q: Some features don't seem to be working, why is this?</Title>
                <p>A: This page is a work in progress. Please be patient, while we make this website perfect for you!</p>
                <Title level={3}>Q: Is it safe to use this site while it is under construction?</Title>
                <p>A: Yes! It is safe to use this site while it is being worked on.</p>
                <Title level={3}>Q: How do I upload pictures and videos?</Title>
                <p>A: While this website is being worked on, you cannot make any uploads to this site.</p>
            </Card>
        </div>
    )
}

export default Support
