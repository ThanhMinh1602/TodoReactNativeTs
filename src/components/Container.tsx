import {ScrollView, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/global_style';

interface Props {
  title?: string;
  back?: boolean;
  right?: ReactNode;
  children: ReactNode;
}
const Container = (props: Props) => {
  const {title, back, right, children} = props;
  return <ScrollView style={globalStyles.container}>{children}</ScrollView>;
};

export default Container;
