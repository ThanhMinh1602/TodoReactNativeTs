import {
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  Image,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import textStyle from '../../constants/textStyle';
import {colors} from '../../constants/colors';
import Row from '../Row';
import {ActivityIndicator} from 'react-native';

interface props {
  style?: StyleProp<ViewStyle>;
  textButton: string;
  icon?: ImageSourcePropType;
  onPress?: (event: GestureResponderEvent) => void;
  isLoading?: boolean;
}
const ButtonCustom = (props: props) => {
  const {style, textButton, icon, onPress, isLoading} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          alignItems: 'center',
          backgroundColor: icon ? colors.backgroundColor : colors.primaryColor,
          paddingVertical: 12,
          borderRadius: 5,
          borderColor: colors.primaryColor,
          borderWidth: 1,
        },
        style,
      ]}>
      {isLoading == true ? (
        <ActivityIndicator color={icon ? colors.primaryColor : 'white'} />
      ) : (
        <Row>
          {icon && (
            <Image
              style={{width: 26, height: 26, marginRight: 10}}
              source={icon}
            />
          )}
          <Text style={icon ? textStyle.medium14 : textStyle.medium14W}>
            {textButton}
          </Text>
        </Row>
      )}
    </TouchableOpacity>
  );
};

export default ButtonCustom;
