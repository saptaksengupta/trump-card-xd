import React, { ReactHTML, ReactNode } from "react";
import { Text, StyleSheet } from "react-native";
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
