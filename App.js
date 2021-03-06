import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled, { injectGlobal } from 'styled-components';

import Timer from './src/components/Timer';

import reducers from './src/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducers);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Timer />
            </Provider>
        );
    }
}
