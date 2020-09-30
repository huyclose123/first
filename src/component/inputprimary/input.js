import React from 'react';
import {View} from 'react-native';
import styles from './style';
import {TextInput} from 'react-native-gesture-handler';
export default Input = ({
  placeholder,
  textinputstyle,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View style={[styles.view0]}>
      <View style={[styles.view1]}>
        <TextInput
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[styles.textInput0, textinputstyle]}></TextInput>
      </View>
    </View>
  );
};
