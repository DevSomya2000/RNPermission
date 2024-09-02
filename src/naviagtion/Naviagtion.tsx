import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AllowLocation from '../screens/AllowLocation/AllowLocation';
import Home from '../screens/Home/Home';
import {NavParamList} from '../components/interface';

export default function Navigation() {
  const Stack = createStackNavigator<NavParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AllowLocation" component={AllowLocation} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
