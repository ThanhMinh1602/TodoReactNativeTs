import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import textStyle from '../../../constants/textStyle';
import imagePaths from '../../../constants/imagePaths';

interface LoginHeaderProps {
  title: string;
  onBackPress?: () => void;
}

const LoginHeader: React.FC<LoginHeaderProps> = ({title, onBackPress}) => {
  return (
    <View style={styles.header}>
      {onBackPress ? (
        <TouchableOpacity onPress={onBackPress}>
          <Image
            style={{width: 24, height: 24}}
            source={imagePaths.iconsPng.back}
          />
        </TouchableOpacity>
      ) : (
        <View style={{width: 24, height: 24}} />
      )}
      <Text style={textStyle.semiBold16}>{title}</Text>
      <View style={{width: 24, height: 24}} />
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
