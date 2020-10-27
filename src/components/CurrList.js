import React from 'react'
import {View, Text, FlatList} from 'react-native';
import styles from './StyleComp';

const CurrList = ({finalRes}) => {

  return (
    <View>
      <Text style={styles.textStyle}>
        These are the currently available currencies. Swipe down to see all!
      </Text>
      <FlatList
        data={finalRes}
        renderItem={({item}) => {
          return <Text style={styles.textStyle}>{item}</Text>;
        }}
      />
    </View>
  );
}

export default CurrList;
