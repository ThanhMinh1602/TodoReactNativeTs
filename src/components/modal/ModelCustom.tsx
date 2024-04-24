import React, {useState} from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import ButtonCustom from '../buttons/ButtonCustom';
import {globalStyles} from '../../styles/global_style';
import imagePaths from '../../constants/imagePaths';
import textStyle from '../../constants/textStyle';

interface Props {
  visible: boolean;
  onPressOk?: () => void;
  onPressCancel?: () => void;
  title?: string;
  content?: string;
}

const ModelCustom: React.FC<Props> = ({
  visible,
  onPressOk,
  onPressCancel,
  title,
  content,
}) => {
  if (!visible) {
    return null;
  }
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalContainer}>
          {onPressCancel && (
            <TouchableOpacity
              style={styles.closeButton}
              onPress={onPressCancel}>
              <Image
                style={globalStyles.iconStyle}
                source={imagePaths.iconsPng.close}
              />
            </TouchableOpacity>
          )}
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
          <View style={styles.buttonContainer}>
            {onPressCancel && (
              <ButtonCustom
                textButton="Cancel"
                onPress={onPressCancel}
                style={[styles.button, {backgroundColor: 'red'}]}
              />
            )}
            <ButtonCustom
              textButton="OK"
              onPress={onPressOk}
              style={[styles.button, onPressCancel && {width: '45%'}]}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  closeButton: {position: 'absolute', right: 10, top: 10},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    ...textStyle.semiBold16,
    marginBottom: 10,
  },
  content: {
    ...textStyle.medium14,
    marginBottom: 20,
  },
  buttonContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  button: {width: '100%', borderColor: 'transparent'},
});

export default ModelCustom;
