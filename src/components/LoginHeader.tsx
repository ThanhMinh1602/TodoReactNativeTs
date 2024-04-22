import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import textStyle from '../constants/textStyle';

interface LoginHeaderProps {
  title: string;
  onBackPress?: () => void;
}

const LoginHeader: React.FC<LoginHeaderProps> = ({title, onBackPress}) => {
  return (
    <View style={styles.header}>
      {onBackPress ? (
        <TouchableOpacity onPress={onBackPress}></TouchableOpacity>
      ) : (
        <View />
      )}
      <Text style={textStyle.semiBold16}>{title}</Text>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default LoginHeader;
