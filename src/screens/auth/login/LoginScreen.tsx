import {Image, Text, View} from 'react-native';
import {globalStyles} from '../../../styles/global_style';
import LoginHeader from '../../../components/LoginHeader';
import TextInputCustom from '../../../components/TextInputCustom';
import textStyle from '../../../constants/textStyle';
const LoginScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <LoginHeader title="Login" onBackPress={console.log} />
      <View style={globalStyles.loginForm}>
        <Text style={textStyle.semiBold14}>E-mail</Text>
        <TextInputCustom placeholder="Enter your email" />
        <Text style={[textStyle.semiBold14, {marginTop: 12}]}>Password</Text>
        <TextInputCustom placeholder="Enter your password" />
      </View>
    </View>
  );
};
export default LoginScreen;
