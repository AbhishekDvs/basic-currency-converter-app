import React from 'react'
import {View, TextInput} from 'react-native';
import styles from './StyleComp'

const TextCurrs = ({
  placeholderText,
  inputCurr,
  onTermChange,
  onTermSubmit,
}) => {
  return (
    <View>
      <TextInput
        style={styles.inputBarStyle}
        placeholder={placeholderText}
        autoCapitalize="characters"
        autoCorrect={false}
        value={inputCurr}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

export default TextCurrs;
