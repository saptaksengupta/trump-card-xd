import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { lightThemeColors, TcText } from '../shared/themes';

export default function CardCategories() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor={lightThemeColors.bg} barStyle="dark-content" />
      <View style={styles.cardSliderContainer}>
        <TcText>
          Default Text component
        </TcText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: lightThemeColors.bg,
  },
  cardSliderContainer: {
    backgroundColor: lightThemeColors.bg
  }
});
