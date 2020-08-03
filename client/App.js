import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import NewLog from './Screens/NewLog';
import CategoryDetail from './Screens/CategoryDetail';
import MyItems from './Screens/MyItems';
import LogDetail from './Screens/LogDetail';

const MainStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="NewLog" component={NewLog} />
        <MainStack.Screen name="CategoryDetail" component={CategoryDetail} />
        <MainStack.Screen name="MyItems" component={MyItems} />
        <MainStack.Screen name="LogDetail" component={LogDetail} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
