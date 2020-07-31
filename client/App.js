import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import NewLog from './Screens/NewLog';

// const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="NewLog" component={NewLog} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
