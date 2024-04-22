import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {splashStyle} from './style/splashStyle';
import {useAppNavigation} from '../../utils/useAppNavigation';

const SplashScreen: React.FC = () => {
  const navigation = useAppNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('NavigatorStack', {screen: 'Login'});
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

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
