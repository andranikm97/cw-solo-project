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
        <MainStack.Screen
          name="Home"
          component={Home}
          options={() => ({ title: 'Home' })}
        />
        <MainStack.Screen
          name="NewLog"
          component={NewLog}
          options={() => ({ title: 'Create A New Log' })}
        />
        <MainStack.Screen
          name="CategoryDetail"
          component={CategoryDetail}
          options={() => ({ title: 'Categories' })}
        />
        <MainStack.Screen
          name="MyItems"
          component={MyItems}
          options={() => ({ title: 'My Items' })}
        />
        <MainStack.Screen
          name="LogDetail"
          component={LogDetail}
          options={({ route }) => ({ title: 'Log: ' + route.params.date })}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
