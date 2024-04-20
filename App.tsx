/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StatusBar} from 'react-native';

import SplashScreen from './src/screens/splash/SplashScreen';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor="rgba(0, 0, 0, 0.0)"
      />
      <SplashScreen />
    </>
  );
}

export default App;
