import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ListScreen from './screens/ListScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
      <StatusBar style="auto" />
    </View>
  );
}

const TabNavigator = createStackNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  ListScreen:{screen:ListScreen}
},
{
  initialRouteName:"WelcomeScreen"
}
)

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});