import * as React from 'react';
import { Day }  from './Day';
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 100px;
    min-height: 160px;
    font-family: Arial;
    text-align: center;
    border: 1px solid #9fcccd;
    float: left;
    margin: 5px;
`;

const Weekday = styled.h1`
  font-size: 1.5em;
  color: #bf8293;
`;

const WeatherIcon = styled.img`
  padding: 10px;
  width: 50px;
  background: #e5d6da;
`;

const TempWrapper = styled.div`
    width: 100%;
    margin-top: 5px;
`;

const TempSpan = styled.span`
    margin: 5px;
    color: #876639;
`;

export class WeatherCard extends React.Component<Day> {
    render(): JSX.Element {
        return  (
            <Wrapper>
                <Weekday>{this.props.name}</Weekday>
                <WeatherIcon srcSet={this.props.imageLink}/>
                <TempWrapper>
                    <TempSpan>{this.props.tempLow}°</TempSpan>
                    <TempSpan>{this.props.tempHigh}°</TempSpan>
                </TempWrapper>
            </Wrapper>
        );
    }
}