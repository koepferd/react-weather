import * as React from 'react';
import { WeatherCard } from './components/WeatherCard/WeatherCard';
import { Day } from './components/WeatherCard/Day';
import styled from 'styled-components';

const ForecastTitle = styled.h1`
    font-family: Arial;
    color: #005552;
`;

const testDay: Day = {
    name: 'Mon',
    imageLink: require('/src/resources/sunny.png'),
    tempLow: 10,
    tempHigh: 15
};
const testDayTwo: Day = {
    name: 'Tue',
    imageLink: require('/src/resources/sunny.png'),
    tempLow: 12,
    tempHigh: 16
};
const testDayThree: Day = {
    name: 'Wed',
    imageLink: require('/src/resources/sunny.png'),
    tempLow: 13,
    tempHigh: 18
};
const testDayFour: Day = {
    name: 'Thu',
    imageLink: require('/src/resources/sunny.png'),
    tempLow: 18,
    tempHigh: 21
};
const testDayFive: Day = {
    name: 'Fri',
    imageLink: require('/src/resources/sunny.png'),
    tempLow: 18,
    tempHigh: 25
};

export class App extends React.Component {
    render(): JSX.Element {
        return(
            <div>
                <ForecastTitle>Debs Weather Forecast:</ForecastTitle>
                <WeatherCard name={testDay.name} imageLink={testDay.imageLink} tempLow={testDay.tempLow} tempHigh={testDay.tempHigh}/>
                <WeatherCard name={testDayTwo.name} imageLink={testDayTwo.imageLink} tempLow={testDayTwo.tempLow} tempHigh={testDayTwo.tempHigh}/>
                <WeatherCard name={testDayThree.name} imageLink={testDayThree.imageLink} tempLow={testDayThree.tempLow} tempHigh={testDayThree.tempHigh}/>
                <WeatherCard name={testDayFour.name} imageLink={testDayFour.imageLink} tempLow={testDayFour.tempLow} tempHigh={testDayFour.tempHigh}/>
                <WeatherCard name={testDayFive.name} imageLink={testDayFive.imageLink} tempLow={testDayFive.tempLow} tempHigh={testDayFive.tempHigh}/>
            </div>
        );
    }
}