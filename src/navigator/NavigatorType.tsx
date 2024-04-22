import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamListType = {
  NavigatorStack: NavigatorScreenParams<NavigatorStackParamListType>;
};
export type NavigatorStackParamListType = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  SendOtp: {email: string; name: string};
};
