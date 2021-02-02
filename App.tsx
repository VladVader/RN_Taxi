import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { HomeScreen } from './screens/HomeScreen';
import { LandingScreen } from './screens/LandingScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Landing: {
    screen: LandingScreen
  }
},{
        initialRouteName: "Landing"
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
     <AppContainer />
  );
}

const styles = StyleSheet.create({
   tabIcon: {
     width: 30,
     height: 30
   }
});
