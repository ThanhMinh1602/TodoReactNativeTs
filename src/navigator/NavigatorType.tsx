import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamListType = {
  NavigatorStack: NavigatorScreenParams<NavigatorStackParamListType>;
};
export type NavigatorStackParamListType = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  SendOtp: {fullName: string; email: string; password: string};
};
