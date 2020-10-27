import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CurrList from '../components/CurrList';
import Texts from '../components/Texts';
import styles from '../components/StyleComp';
import useResults from '../hooks/useResults';
import HeaderScreen from '../components/HeaderScreen';

const Currdisplay = ({navigation}) => {
  const [results] = useResults();
  //Introductory text with list of currencies
  return (
    <View style={styles.viewStyle}>
      <HeaderScreen title="CURRENCY EXCHANGE" navigation={navigation} />
      <Texts />
      <TouchableOpacity
        onPress={() => navigation.navigate('Add new currency')}
        style={styles.buttonStyle}>
        <Text style={styles.textStyle}> Add new currency </Text>
      </TouchableOpacity>
      <CurrList finalRes={results} />
    </View>
  );
};

export default Currdisplay;
