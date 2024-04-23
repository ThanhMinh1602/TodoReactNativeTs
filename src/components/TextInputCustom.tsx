import {
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import {globalStyles} from '../styles/global_style';
import {colors} from '../constants/colors';
import imagePaths from '../constants/imagePaths';
import {useState} from 'react';

interface textInputProps {
  placeholder: string;
  onChangeText?: (text: string) => void;
  value?: string;
}

const TextInputCustom = (props: textInputProps) => {
  const {placeholder, onChangeText, value} = props;
  const [hidePass, setHidePass] = useState(true);
  const isPassword =
    placeholder === 'Enter your password' ||
    placeholder === 'Confirm your password';

  return (
    <View style={[styles.container]}>
      <TextInput
        style={[styles.input, globalStyles.inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={colors.borderColor}
        secureTextEntry={isPassword ? hidePass : false}
        onChangeText={onChangeText}
        value={value}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={() => setHidePass(!hidePass)}
          style={styles.eyeIcon}>
          <Image
            source={
              hidePass
                ? imagePaths.iconsPng.visibility_off
                : imagePaths.iconsPng.visibility
            }
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 8,
  },
});

export default TextInputCustom;
