import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const propTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TouchableOpacity onPressOut={this.props.onPress}>
                <FontAwesome name={this.props.iconName} size={80} color="white" />
            </TouchableOpacity>
        );
    }
}

Button.propTypes = propTypes;
export default Button;
