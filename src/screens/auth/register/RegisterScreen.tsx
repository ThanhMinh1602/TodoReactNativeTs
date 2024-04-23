import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../../../styles/global_style';
import LoginHeader from '../components/LoginHeader';
import textStyle from '../../../constants/textStyle';
import TextInputCustom from '../../../components/TextInputCustom';
import ButtonCustom from '../../../components/buttons/ButtonCustom';
import Center from '../../../components/Center';
import imagePaths from '../../../constants/imagePaths';
import Row from '../../../components/Row';
import {useAppNavigation} from '../../../utils/useAppNavigation';
import {useState} from 'react';
import {sendOtp} from '../../../api/services/auth_service';

const RegisterScreen: React.FC = () => {
  const navigation = useAppNavigation();
  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errors, setErrors] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const goToLogin = () => {
    navigation.goBack();
  };

  const onTapNext = async () => {
    if (!fullName) {
      return setErrors('Name is required.');
    }
    if (!email) {
      return setErrors('Email is required.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return setErrors('Email is invalid.');
    }
    if (!password) {
      return setErrors('Password is required.');
    } else if (password.length < 8) {
      return setErrors('Password must be at least 8 characters.');
    }
    if (!passwordConfirm) {
      return setErrors('Password confirm is required.');
    } else if (passwordConfirm != password) {
      return setErrors('Password confirm is valid.');
    }
    setErrors('');
    setIsLoading(true);
    const data = await sendOtp(email);
    console.log(data);
    setIsLoading(false);
    navigation.navigate('NavigatorStack', {
      params: {fullName, email, password},
      screen: 'SendOtp',
    });
  };
  return (
    <View style={globalStyles.container}>
      <ScrollView style={globalStyles.container}>
        <LoginHeader title="Sign Up" onBackPress={goToLogin} />
        <View style={globalStyles.loginForm}>
          <Text style={textStyle.semiBold14}>Full name</Text>
          <TextInputCustom
            placeholder="Enter your name"
            value={fullName}
            onChangeText={setFullname}
          />
          <Text style={[textStyle.semiBold14, {marginTop: 12}]}>E-mail</Text>
          <TextInputCustom
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={[textStyle.semiBold14, {marginTop: 12}]}>Password</Text>
          <TextInputCustom
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
          />
          <Text style={[textStyle.semiBold14, {marginTop: 12}]}>
            Confirm Password
          </Text>
          <TextInputCustom
            placeholder="Confirm your password"
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
          />
          {errors != '' && (
            <Center>
              <Text style={{color: 'red', marginTop: errors != '' ? 47 : 0}}>
                {errors}
              </Text>
            </Center>
          )}
          <ButtonCustom
            isLoading={isLoading}
            style={{marginTop: errors != '' ? 10 : 57}}
            textButton="Next"
            onPress={onTapNext}
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
            onPress={console.log}
          />
        </View>
      </ScrollView>
      <Row style={{position: 'absolute', bottom: 20}}>
        <Text style={textStyle.medium12}>Already Have an account?</Text>
        <TouchableOpacity onPress={goToLogin}>
          <Text style={textStyle.semiBold12Blue}> SignIn </Text>
        </TouchableOpacity>
      </Row>
    </View>
  );
};
export default RegisterScreen;
