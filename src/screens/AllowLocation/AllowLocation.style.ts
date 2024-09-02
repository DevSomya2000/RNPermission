import {Platform, StatusBar, StyleSheet} from 'react-native';

const EnableLocationStyle = StyleSheet.create({
  locationWrap: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  resendButton: {
    marginLeft: 4,
    color: '#fff',
  },
  verifyButton: {
    marginVertical: 0,
  },
  buttonBox: {
    display: 'flex',
    alignItems: 'center',
  },
  loginWrap: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#081F37',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
  },
  titleText: {
    fontSize: 32,
    lineHeight: 48,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 11,
    fontFamily: 'Poppins-Regular',
  },
});

export default EnableLocationStyle;
