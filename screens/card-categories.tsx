import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function CardCategories() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor="white" barStyle="dark-content" />
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
