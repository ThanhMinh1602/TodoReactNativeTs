import {Text, View} from 'react-native';
import {globalStyles} from '../../../styles/global_style';
import textStyle from '../../../constants/textStyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import OtpTextInput from '../components/otp_text_input';
import ButtonCustom from '../../../components/buttons/ButtonCustom';

const SendOtpScreen: React.FC = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.loginForm}>
        <Text style={textStyle.semiBold16}>Verification Code</Text>
        <Text style={[textStyle.semiBold16Gr, {marginTop: 20, marginBottom: 100}]}>
          We have sent the verification code to your email address
        </Text>
        <OtpTextInput handleTextChange={console.log} />
        <ButtonCustom
          textButton="Verifition"
          style={{
            position: 'absolute',
            bottom: 30,
            left: 20,
            right: 20,
          }}></ButtonCustom>
      </View>
    </SafeAreaView>
  );
};
export default SendOtpScreen;
