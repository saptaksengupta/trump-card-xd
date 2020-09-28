import React, { ReactHTML, ReactNode } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { lightThemeColors } from "./constants";
import { DefaultPropTypes } from "../../types/core.type";

export const TcText = (props: DefaultPropTypes) => {
  const styles = StyleSheet.create({
    defaultStyle: {
      color: props.mode === 'light' ? lightThemeColors.lightFont : lightThemeColors.darkFont,
      fontSize: 16,
    },
  });

  let finalStyle = { ...styles.defaultStyle, ...props.style };

  return <Text style={finalStyle}>{props.children}</Text>;
};

export const TcInput = (props: DefaultPropTypes) => {
  const styles = StyleSheet.create({
    defaultStyle: {
      width: '100%',
      height: 40,
      fontSize: 23,
      letterSpacing: 3  
    },
    inputContainer: {
      width: '100%',
      padding: 15,
      borderWidth: 3,
      borderColor: lightThemeColors.primary,
      borderRadius: 10
    }
  });

  const finalStyle = {
    ...styles.defaultStyle,
    ...props.style
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput style={finalStyle} />
    </View>
  )
}
