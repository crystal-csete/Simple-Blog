import React from 'react';
import { Card, Typography } from 'antd';
import './CovidFacts.css';

const CovidFacts = () => {
    const { Title } = Typography;


    return (
        <div className="covidFactsContainer">
            
            <Card className="covidCard" title="Covid Facts" size="default">
                <Title level={3}>Is it okay to travel during the COVID-19 pandemic?</Title>
                <p>Non-essential travel is not recommended, and some kinds of travel may pose higher risks.</p>
                <p>Airline travel may be riskier because of time spent in lines and terminals can make distancing difficult, and you may have to sit near others for long periods of time.Masking may be inconsistent. The virus does not spread easily on flights because of the way air is circulated and filtered, but viruses on high-touch surfaces in terminals and on airplanes can increase the risk of exposure via those surfaces.</p>
                <p>A carefully planned driving trip to a hotel or vacation home is a less risky option because you should limit the amount of time spent interacting with people from other households.</p>
                <p>For any trip, consider what you will do if you become ill while away, and always check restrictions in the area to which you are traveling.</p>
                <p><a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/index.html" target="_blank">CDC’s travel website has more information.</a> </p>
                <Title level={3}>Am I required to get a COVID-19 test before travelling to the United States?</Title>
                <p>CDC requires all air passengers two years of age or older coming to the United States, including U.S. citizens, to present a negative COVID-19 test result from a nucleic acid amplification test (NAAT) or antigen test (“viral test”) conducted no more than 3 days before their flight's departure.</p>
                <Title level={3}>Does a face mask provide protection from COVID-19?</Title>
                <p>Masks may help prevent people who have COVID-19 from spreading the virus to others. The CDC recommends people wear face masks in public settings, especially when other social distancing measures are difficult to maintain. Wearing a face mask may limit exposure to respiratory droplets and large particles and may help prevent people who have COVID-19 from spreading the virus.</p>
            </Card>
        </div>
    )
}

export default CovidFacts
