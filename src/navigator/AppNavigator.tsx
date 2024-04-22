import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash/SplashScreen';
import LoginScreen from '../screens/auth/login/LoginScreen';
import RegisterScreen from '../screens/auth/register/RegisterScreen';
import {NavigatorStackParamListType} from './NavigatorType';

const NavigatorStack =
  createNativeStackNavigator<NavigatorStackParamListType>();

const AppNavigator: React.FC = () => {
  return (
    <NavigatorStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <NavigatorStack.Screen name="Splash" component={SplashScreen} />
      <NavigatorStack.Screen name="Login" component={LoginScreen} />
      <NavigatorStack.Screen name="Register" component={RegisterScreen} />
      <NavigatorStack.Screen name="SendOtp" component={RegisterScreen} />
    </NavigatorStack.Navigator>
  );
};

export default AppNavigator;
