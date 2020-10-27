import React, {useState} from 'react';
import {View, Text} from 'react-native';
import TextCurrs from '../components/TextCurrs';
import rapid from '../api/rapid';
import styles from '../components/StyleComp';
import HeaderSCreen from '../components/HeaderScreen';

const Currconv = ({navigation}) => {
  const [cur1, setCur1] = useState('');
  const [cur2, setCur2] = useState('');
  const [results, setResults] = useState([]);

  const convApi = async () => {
    const response = await rapid.get('/exchange', {
      params: {
        q: '1.0',
        from: cur1,
        to: cur2,
      }
    });
    setResults(response.data);
  }

  return (
    <View style={styles.viewStyle}>
      
      <HeaderSCreen title="CONVERT" navigation={navigation} />

      <Text style={styles.textStyle}> Enter currency codes here: </Text>

      <TextCurrs
        placeholderText="Currency to convert from"
        inputCurr={cur1}
        onTermChange={(setCur) => setCur1(setCur)}
        onTermSubmit={() => convApi()}
      />

      {cur1.length != 3 ? (
        <Text style={styles.textStyle}>
          Currency Code must be 3 characters.
        </Text>
      ) : null}

      <TextCurrs
        placeholderText="Currency to convert to"
        inputCurr={cur2}
        onTermChange={(newCur) => setCur2(newCur)}
        onTermSubmit={() => convApi()}
      />

      {cur2.length != 3 ? (
        <Text style={styles.textStyle}>
          Currency Code must be 3 characters.
        </Text>
      ) : null}

      <Text style={styles.textStyle}>
        1 {cur1} = {results} {cur2}
      </Text>
    </View>
  );
};

export default Currconv;
