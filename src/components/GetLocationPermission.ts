import {Platform} from 'react-native';
import {check, PERMISSIONS, request} from 'react-native-permissions';

const permissionToAsk =
  Platform.OS === 'ios'
    ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

export const GetLocationPermissions = {
  checkPermission: async () => {
    const result = await check(permissionToAsk);
    return result;
  },

  requestPermission: async () => {
    const result = await request(permissionToAsk);
    return result;
  },
};

export default {GetLocationPermissions};
