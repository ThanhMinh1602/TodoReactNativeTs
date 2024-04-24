import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {globalStyles} from '../../../styles/global_style';
import textStyle from '../../../constants/textStyle';
import OtpTextInput from '../components/otp_text_input';
import ButtonCustom from '../../../components/buttons/ButtonCustom';
import {useAppNavigation} from '../../../utils/useAppNavigation';
import {register} from '../../../api/services/auth_service';
import {RegisterModel} from '../../../model/register_model';
import ModelCustom from '../../../components/modal/ModelCustom';
import {NavigatorStackParamListType} from '../../../navigator/NavigatorType';

type Props = {
  route: RouteProp<NavigatorStackParamListType, 'SendOtp'>;
};

const SendOtpScreen: React.FC<Props> = ({route}) => {
  const {fullName, email, password} = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState('');
  const [modalData, setModalData] = useState({
    visible: false,
    title: '',
    content: '',
  });
  const navigation = useAppNavigation();

  const handleVerification = async () => {
    setIsLoading(true);
    const registerData = new RegisterModel(fullName, email, password, 0, code);
    const response = await register(registerData);
    const {status_code, message} = response;
    if (status_code === 200) {
      setModalData({
        visible: true,
        title: 'Success',
        content: 'Congratulations, you have successfully registered an account',
      });
    } else {
      let modalTitle = '';
      let modalContent = '';
      if (message === 'USER_EXISTED') {
        modalTitle = 'User existed';
        modalContent = 'User email already exists in the system';
      } else if (message === 'WRONG_OTP') {
        modalTitle = 'Wrong OTP';
        modalContent = 'OTP is incorrect, please re-enter';
      }
      setModalData({
        visible: true,
        title: modalTitle,
        content: modalContent,
      });
    }
    setIsLoading(false);
  };
  const {visible, title, content} = modalData;
  const handlePressOk = () => {
    if (title == 'Success') {
      navigation.navigate('NavigatorStack', {screen: 'Login'});
    } else if (title == 'User existed') {
      navigation.navigate('NavigatorStack', {screen: 'Register'});
    } else if (title == 'Wrong OTP') {
      setModalData({
        visible: false,
        title: '',
        content: '',
      });
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ModelCustom
        visible={visible}
        title={title}
        content={content}
        onPressOk={handlePressOk}
      />
      <View style={globalStyles.loginForm}>
        <Text style={textStyle.semiBold16}>Verification Code</Text>
        <Text
          style={[textStyle.semiBold16Gr, {marginTop: 20, marginBottom: 100}]}>
          We have sent the verification code to your email address
        </Text>
        <OtpTextInput handleTextChange={setCode} />
        <ButtonCustom
          onPress={handleVerification}
          isLoading={isLoading}
          textButton="Verification"
          style={{
            position: 'absolute',
            bottom: 30,
            left: 20,
            right: 20,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SendOtpScreen;
