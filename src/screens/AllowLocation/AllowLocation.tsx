import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import EnableLocationStyle from './AllowLocation.style';
import {RESULTS} from 'react-native-permissions';
import {Button, HStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {GetLocationPermissions} from '../../components/GetLocationPermission';
import {NavigationProp} from '../../components/interface';

export default function AllowLocation() {
  const navigation = useNavigation<NavigationProp<'AllowLocation'>>();

  async function allowAccess() {
    try {
      const result = await GetLocationPermissions.checkPermission();
      console.log('CHECK RESULT ---> ', result);
      if (result === RESULTS.GRANTED) {
        navigation.navigate({
          name: 'Home',
          params: {text: 'The result is granted.'},
        });
      } else if (result === RESULTS.DENIED) {
        requestAccess();
      } else if (result === RESULTS.BLOCKED) {
        navigation.navigate({
          name: 'Home',
          params: {
            text: 'The result is blocked. You need to manually allow it',
          },
        });
      }
    } catch (error: any) {
      console.log('error', error);
    }
  }

  async function requestAccess() {
    try {
      const reqResult = await GetLocationPermissions.requestPermission();
      console.log('REQUEST RESULT ---> ', reqResult);
      if (reqResult === RESULTS.GRANTED) {
        navigation.navigate({
          name: 'Home',
          params: {text: 'The result is granted'},
        });
      } else if (reqResult === RESULTS.DENIED) {
        requestAccess();
      } else if (reqResult === RESULTS.BLOCKED) {
        navigation.navigate({
          name: 'Home',
          params: {
            text: 'The result is blocked. You need to manually allow it',
          },
        });
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    allowAccess();
  }, []);

  return (
    <View
      style={[EnableLocationStyle.loginWrap, EnableLocationStyle.locationWrap]}>
      <View>
        <Text style={EnableLocationStyle.titleText}>Enable Location</Text>
      </View>

      {/* <View style={EnableLocationStyle.buttonBox}>
        <HStack px={12} width={'100%'}>
          <Button
            onPress={() => allowAccess()}
            style={EnableLocationStyle.verifyButton}>
            Allow Access
          </Button>
        </HStack>
      </View> */}
    </View>
  );
}
