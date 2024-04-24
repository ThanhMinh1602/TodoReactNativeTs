import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../../../styles/global_style';
import LoginHeader from '../components/LoginHeader';
import TextInputCustom from '../../../components/TextInputCustom';
import textStyle from '../../../constants/textStyle';
import Row from '../../../components/Row';
import ButtonCustom from '../../../components/buttons/ButtonCustom';
import Center from '../../../components/Center';
import imagePaths from '../../../constants/imagePaths';
import {useAppNavigation} from '../../../utils/useAppNavigation';
import {useState} from 'react';
import {login} from '../../../api/services/auth_service';
import ModelCustom from '../../../components/modal/ModelCustom';
const LoginScreen: React.FC = () => {
  const navigation = useAppNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState('');
  const [modalData, setModalData] = useState({
    visible: false,
    title: '',
    content: '',
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const goToRegister = () => {
    navigation.navigate('NavigatorStack', {screen: 'Register'});
  };
  const {visible, title, content} = modalData;
  const onPresLogin = async () => {
    if (!email) {
      return setErrors('Plese enter email');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return setErrors('Email is invalid.');
    }
    if (!password) {
      return setErrors('Plese enter password');
    }
    setIsLoading(true);
    const response = await login(email, password);

    if (response['message'] == 'USER_NOT_EXIST') {
      setModalData({
        visible: true,
        title: 'Login Failed',
        content: 'Email not exist',
      });
    } else if (response['message'] == 'WRONG_PASSWORD') {
      setModalData({
        visible: true,
        title: 'Login Failed',
        content: 'Wrong password',
      });
    } else if (response['message'] == 'success') {
      navigation.replace('NavigatorStack', {
        screen: 'Home',
      });
    }
    console.log(response);
    setIsLoading(false);
  };
  const onPressOk = () => {
    setModalData({
      visible: false,
      title: '',
      content: '',
    });
    setErrors('');
  };
  return (
    <View style={globalStyles.container}>
      <ModelCustom
        visible={visible}
        title={title}
        content={content}
        onPressOk={onPressOk}
      />
      <LoginHeader title="Sign In" />
      <ScrollView style={globalStyles.container}>
        <View style={globalStyles.loginForm}>
          {errors != '' && (
            <Center>
              <Text style={{color: 'red'}}>{errors}</Text>
            </Center>
          )}
          <Text style={textStyle.semiBold14}>E-mail</Text>
          <TextInputCustom
            placeholder="Enter your email"
            onChangeText={setEmail}
            value={email}
          />
          <Text style={[textStyle.semiBold14, {marginTop: 12}]}>Password</Text>
          <TextInputCustom
            placeholder="Enter your password"
            onChangeText={setPassword}
            value={password}
          />
          <ButtonCustom
            style={{marginTop: 60}}
            textButton="Sign In Now"
            isLoading={isLoading}
            onPress={onPresLogin}
          />
          <Center style={{marginVertical: 47}}>
            <Text style={textStyle.semiBold12}>Or with</Text>
          </Center>
          <ButtonCustom
            icon={imagePaths.iconsPng.facebook}
            textButton="Login with Facebook"
          />
          <ButtonCustom
            style={{marginTop: 10}}
            icon={imagePaths.iconsPng.google}
            textButton="Login with Google"
          />
        </View>
      </ScrollView>
      <Row style={{position: 'absolute', bottom: 20}}>
        <Text style={textStyle.medium12}>I don’t Have an account?</Text>
        <TouchableOpacity onPress={goToRegister}>
          <Text style={textStyle.semiBold12Blue}> Signup </Text>
        </TouchableOpacity>
      </Row>
    </View>
  );
};
export default LoginScreen;
