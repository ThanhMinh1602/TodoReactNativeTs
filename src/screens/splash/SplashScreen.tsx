import {Image, View} from 'react-native';
import React from 'react';

import {splashStyle} from './style/splashStyle';

const SplashScreen = () => {
  return (
    <View style={splashStyle.container}>
      <Image
        style={splashStyle.logo}
        source={require('../../../assets/images/logo.png')}
      />
    </View>
  );
};

export default SplashScreen;
