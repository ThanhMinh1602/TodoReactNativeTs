import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator';
import {RootStackParamListType} from './NavigatorType';

const RootStack = createNativeStackNavigator<RootStackParamListType>();

const RootNavigator: React.FC = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="NavigatorStack" component={AppNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
