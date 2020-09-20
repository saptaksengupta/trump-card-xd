import React from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import { lightThemeColors, TcText } from "../shared/themes";

const Players = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor={lightThemeColors.bg}
        barStyle="dark-content"
      />
      <TcText mode="dark" style={styles.headerTxt}>
          <Text>Choose Your Partners</Text>
      </TcText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: lightThemeColors.bg,
  },
  headerTxt: {
    fontSize: 55
  }
});

export default Players;