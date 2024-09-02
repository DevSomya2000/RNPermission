// screens/HomeScreen.js
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Button, View, Text} from 'react-native';
import {NavParamList} from '../../components/interface';

type HomeRouteProp = RouteProp<NavParamList, 'Home'>;

export default function Home() {
  const route = useRoute<HomeRouteProp>();
  const {text} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{text}</Text>
    </View>
  );
}
