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
const LoginScreen: React.FC = () => {
  const navigation = useAppNavigation();
  const goToRegister = () => {
    navigation.navigate('NavigatorStack', {screen: 'Register'});
  };
  return (
    <View style={globalStyles.container}>
      <ScrollView style={globalStyles.container}>
        <LoginHeader title="Sign In" />
        <View style={globalStyles.loginForm}>
          <Text style={textStyle.semiBold14}>E-mail</Text>
          <TextInputCustom placeholder="Enter your email" />
          <Text style={[textStyle.semiBold14, {marginTop: 12}]}>Password</Text>
          <TextInputCustom placeholder="Enter your password" />
          <ButtonCustom style={{marginTop: 60}} textButton="Sign In Now" />
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
