import React, { ReactHTML, ReactNode } from "react";
import { Text, StyleSheet } from "react-native";
import { lightThemeColors } from "./constants";
import { DefaultPropTypes } from "../../types/core.type";

const styles = StyleSheet.create({
  defaultStyle: {
    color: lightThemeColors.lightFont,
    fontSize: 16,
  },
});

export const TcText = (props: DefaultPropTypes) => {
  const finalStyle = { ...styles.defaultStyle, ...props.style };

  return <Text style={finalStyle}>{props.children}</Text>;
};
