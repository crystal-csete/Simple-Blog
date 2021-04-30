import React from 'react';
import { Card, Typography } from 'antd';
import './TravelDestinations.css';

const TravelDesinations = () => {
    const { Title } = Typography;


    return (
        <div className="travelContainer">
            <Card className="travelCard" title="Travel Destination Links" size="default">
                <Title level={4}><a href="https://travel.usnews.com/rankings/best-usa-vacations/" target="_blank">U.S.News Travel</a></Title>
                <Title level={4}><a href="https://www.thebrokebackpacker.com/best-places-to-visit-usa/" target="_blank">The Broke Backpacker</a></Title>
                <Title level={4}><a href="https://www.tripstodiscover.com/18-exotic-places-to-travel-right-in-the-u-s/" target="_blank">Trips To Discover</a></Title>
                <Title level={4}><a href="https://thepointsguy.com/guide/destinations-for-2021/" target="_blank">The Points Guy</a></Title>
            </Card>
        </div>
    )
}

export default TravelDesinations
