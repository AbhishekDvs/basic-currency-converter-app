import React from 'react';
import {View, Text} from 'react-native';
import styles from './StyleComp';

const Texts = () => {
  //Introductory text with list of currencies
  return (
    <View>

      <Text style={styles.textStyle}>
        Track the current conversion cost between any two currencies.
      </Text>

      <Text style={styles.textStyle}>
        Swipe to click on "Convert" page to convert currencies.
      </Text>
      
    </View>
  );
};

export default Texts;
