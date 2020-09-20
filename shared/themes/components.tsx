import React, { ReactHTML, ReactNode } from 'react';
import { Text, StyleSheet } from 'react-native';
import { lightThemeColors } from './constants';
import { DefaultPropTypes } from '../../types/core.type';

const styles = StyleSheet.create({
    defaultStyle: {
        color: lightThemeColors.darkFont,
        fontSize: 16
    }
})

export const TcText = (props: DefaultPropTypes) => (
    <Text style={styles.defaultStyle}>
        {props.children}
    </Text> 
) 

