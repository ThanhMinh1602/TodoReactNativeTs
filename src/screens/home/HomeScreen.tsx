import {Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../styles/global_style';
import textStyle from '../../constants/textStyle';

const HomeScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={textStyle.semiBold16}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
