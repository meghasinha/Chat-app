import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import start and chat
import Start from './components/Start';
import Chat from './components/Chat';
// import react Navigation
import { createStackNavigator, createAppContainer } from 'react-navigation'

// Create the navigator
const navigator = createStackNavigator({
  Start: { screen: Start},
  Chat: { screen: Chat}
});

const navigatorContainer = createAppContainer(navigator);
// Export it as the root component
export default navigatorContainer;
