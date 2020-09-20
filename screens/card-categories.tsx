import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

import { lightThemeColors, TcText } from '../shared/themes';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CardCategories() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor={lightThemeColors.bg} barStyle="dark-content" />
      <View style={styles.cardSliderContainer}>
        <View style={styles.cardHolder}>
          <Image source={require("../assets/images/gaming.png")} style={{width: 220, height: 220}}  />
        </View>
      </View>
      <View style={styles.action}>
        <TouchableOpacity style={styles.actionBtn}>
          <TcText style={styles.actionBtnTxt}>
            Let's Play
          </TcText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: lightThemeColors.bg,
  },
  cardSliderContainer: {
    flex: 2.5,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  cardHolder: {
    width: 200,
    height: 300,
    // backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  action: {
    flex: 0.5,
    backgroundColor: lightThemeColors.bg,
    width: '100%',
    alignItems: "center",
    justifyContent: "center"
  },
  actionBtn: {
    backgroundColor: lightThemeColors.primary,
    width: 200,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  actionBtnTxt: {
    fontWeight: 'bold'
  }
});
