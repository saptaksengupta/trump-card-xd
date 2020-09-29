import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { lightThemeColors } from "../../themes/constants";
import { DefaultPropTypes } from "../../../types/core.type";

export const TcxProfileAvatar = (props: DefaultPropTypes) => {
  const styles = StyleSheet.create({
    defaultStyle: {
      padding: 2,
      height: 110,
      width: 80,
      borderColor: lightThemeColors.primary,
      borderRadius: 1,
      borderWidth: 0.9,
      borderStyle: "dashed",
      margin: 50,
    },
  });

  let finalStyle = { ...styles.defaultStyle, ...props.style };

  return (
  <View style={finalStyle}>
      <Image source={require("../../../assets/images/Frame.png")} style={{width: '99%', height: '99%'}}  />
  </View>
  );
};
