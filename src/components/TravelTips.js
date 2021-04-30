import React from 'react';
import { Card, Typography } from 'antd';
import './TravelTips.css';

const TravelTips = () => {
    const { Title } = Typography;


    return (
        <div className="tips_container">
            <Card className="tips_card" title="Travel Tips" size="default">
                <Title level={4}><a href="https://toandfrofam.com/2021-travel-tips/" target="_blank">To And Fro Fam</a></Title>
                <Title level={4}><a href="https://www.aarp.org/travel/travel-tips/safety/info-2020/dream-vacation-planning-benefits.html" target="_blank">AARP</a></Title>
                <Title level={4}><a href="https://www.smartertravel.com/9-unusual-travel-tricks-that-really-work/" target="_blank">Smarter Travel</a></Title>
                <Title level={4}><a href="https://www.tripadvisor.com/" target="_blank">Trip Advisor</a></Title>
            </Card>
        </div>
    )
}

export default TravelTips
