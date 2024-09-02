import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type NavParamList = {
  AllowLocation: undefined;
  Home: {text: string};
};

export type NavigationProp<Screen extends keyof NavParamList> =
  StackNavigationProp<NavParamList, Screen>;
