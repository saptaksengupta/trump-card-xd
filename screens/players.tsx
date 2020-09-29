import React from "react";
import { StyleSheet, View, StatusBar, Text, Image } from "react-native";
import { lightThemeColors, TcText, TcInput } from "../shared/themes";
import { TcxProfileAvatar } from "../shared/components/profile-avatars";

const Players = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor={lightThemeColors.bg}
        barStyle="dark-content"
      />
      <View style={styles.profileContainer}>
        <TcxProfileAvatar>
          
        </TcxProfileAvatar>
        <TcxProfileAvatar>
          <Text>asdasdasdsad</Text>
        </TcxProfileAvatar>
        <TcxProfileAvatar>
          <Text>asdas</Text>
        </TcxProfileAvatar>
        <TcxProfileAvatar>
          <Text>asdas</Text>
        </TcxProfileAvatar>
      </View>
      <View style={styles.searchContainer}>
        {/* <TcInput /> */}
        <Image source={require("../assets/images/undraw_team_spirit_hrr4.png")} style={{width: '100%', height: 290}}  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: lightThemeColors.bg,
  },
  profileContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  headerTxt: {
    fontSize: 55,
  },
  searchContainer: {
    flex: 1,
    width: "100%",
  },
});

export default Players;
