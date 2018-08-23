import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import styled from 'styled-components';
import Button from "../Button";

function formatTime(time){
    let minutes = Math.floor(time/60);
    time -= minutes * 60;
    let seconds = parseInt(time % 60, 10);
    return `${ minutes < 10 ? `0${minutes}` : minutes }:${ seconds < 10 ? `0${seconds}`: seconds }`;
}

export default class Timer extends Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        const currentProps = this.props;
        if ( !currentProps.isPlaying && nextProps.isPlaying ) {
            currentProps.addSecond();
            const timerInterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000 );
            this.setState({
                timerInterval
            });
        }else if( currentProps.isPlaying && !nextProps.isPlaying ){
            clearInterval(this.state.timerInterval);
        }
    }
    render() {
        const {
            isPlaying, elapsedTime, timerDuration,
            startTimer, restartTimer, addSecond
        } = this.props;
        return(
            <Container>
                <StatusBar barStyle={'light-content'} />
                <Upper>
                    <Time>{formatTime(timerDuration - elapsedTime)}</Time>
                </Upper>
                <Lower>
                    { !isPlaying ? <Button iconName="play-circle" onPress={ startTimer } /> : <Button iconName="stop-circle" onPress={ restartTimer } /> }
                </Lower>
            </Container>
        );
    }
}

const Container = styled.View`
    flex: 1;
    background-color: #CE0B24;
`;
const Upper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const Lower = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const Time = styled.Text`
    color: #fff;
    font-size: 100;
    font-weight: 100;
`;
