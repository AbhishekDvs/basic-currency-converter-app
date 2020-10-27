import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CurrList from '../components/CurrList';
import styles from '../components/StyleComp';
import TextCurrs from '../components/TextCurrs';
import useResults from '../hooks/useResults';
import HeaderScreen from '../components/HeaderScreen';

const AddCurrency = ({navigation}) => {
  const [cur, setCur] = useState('');
  const [results] = useResults();
  const [res, setRes] = useState([]);
  console.log(res);
  return (
    <View style={styles.viewStyle}>
      <HeaderScreen title="ADD CURRENCY" navigation={navigation} />

      <Text style={styles.textStyle}> Add currency code </Text>

      <TextCurrs
        placeholderText="Type currency code"
        inputCurr={cur}
        onTermChange={(newCur) => setCur(newCur)}
        onTermSubmit={() => setRes([...results, cur])}
      />

      {cur.length != 3 ? (
        <Text style={styles.textStyle}>
          Currency Code must be 3 characters.
        </Text>
      ) : (
        <Text style={styles.textStyle}>
          The currency code you added is {cur}
        </Text>
      )}

      <CurrList finalRes={res} />

      <Text style={styles.textStyle}>
        {' '}
        Swipe for home or conversion screen.{' '}
      </Text>
    </View>
  );
};

export default AddCurrency;
