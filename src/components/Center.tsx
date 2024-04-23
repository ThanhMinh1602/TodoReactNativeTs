import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
interface props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}
const Center = (props: props) => {
  return <View style={[styles.viewCenter, props.style]}>{props.children}</View>;
};

export default Center;

const styles = StyleSheet.create({
  viewCenter: {
    alignItems: 'center',
  },
});
