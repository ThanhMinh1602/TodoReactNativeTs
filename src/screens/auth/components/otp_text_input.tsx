import React from 'react';
import OTPTextView from 'react-native-otp-textinput';
import {colors} from '../../../constants/colors';

interface OtpTextInputProps {
  handleTextChange: (text: string) => void;
}

const OtpTextInput: React.FC<OtpTextInputProps> = ({handleTextChange}) => {
  return (
    <OTPTextView
      autoFocus={true}
      handleTextChange={handleTextChange}
      offTintColor={colors.borderColor}
      tintColor={colors.primaryColor}
      textInputStyle={{borderWidth: 4, borderRadius: 10}}
    />
  );
};

export default OtpTextInput;
