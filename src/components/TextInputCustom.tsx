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

interface textInputProps {
  placeholder: string;
}

const TextInputCustom: React.FC<textInputProps> = ({placeholder}) => {
  return (
    <View style={[styles.container]}>
      {/* <TextInput
        style={[styles.input, globalStyles.inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={colors.borderColor}
      /> */}
      <TouchableOpacity
      >
        <Image source={imagePaths.iconsPng.visibility} style={styles.eyeIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
});

export default TextInputCustom;
