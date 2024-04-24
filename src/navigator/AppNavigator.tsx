import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash/SplashScreen';
import LoginScreen from '../screens/auth/login/LoginScreen';
import RegisterScreen from '../screens/auth/register/RegisterScreen';
import {NavigatorStackParamListType} from './NavigatorType';
import SendOtpScreen from '../screens/auth/SendOtp/SendOtpScreen';
import HomeScreen from '../screens/home/HomeScreen';

const NavigatorStack =
  createNativeStackNavigator<NavigatorStackParamListType>();

const AppNavigator: React.FC = () => {
  return (
    <NavigatorStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <NavigatorStack.Screen name="Splash" component={SplashScreen} />
      <NavigatorStack.Screen name="Login" component={LoginScreen} />
      <NavigatorStack.Screen name="Register" component={RegisterScreen} />
      <NavigatorStack.Screen name="SendOtp" component={SendOtpScreen} />
      <NavigatorStack.Screen name="Home" component={HomeScreen} />
    </NavigatorStack.Navigator>
  );
};

export default AppNavigator;
