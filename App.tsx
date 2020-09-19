import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screen components
import CardCategories from './screens/card-categories';
import useCachedResources from './hooks/useCachedResources';

const Stack = createStackNavigator();

export default function App() {

  const isLoadingResources = useCachedResources();

  if (isLoadingResources) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
