import React, {ReactNode} from 'react';
import {View, StyleSheet, ViewProps, ViewStyle} from 'react-native';

interface RowProps {
  children: ReactNode;
  style?: ViewStyle;
}

const Row = ({children, style, ...rest}: RowProps) => {
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default Row;
