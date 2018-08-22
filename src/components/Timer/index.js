import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import styled from 'styled-components';
import Button from "../Button";

export default class Timer extends Component {
    constructor(props) {
        super(props);
    }
    handlePlay() {
            
    }
    render() {
        return(
            <Container>
                <StatusBar barStyle={'light-content'} />
                <Upper>
                    <Time>25:00</Time>
                </Upper>
                <Lower>
                    <Button iconName="play-circle" onPress={() => alert("working")} />
                    <Button iconName="stop-circle" onPress={() => alert("working")} />
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
