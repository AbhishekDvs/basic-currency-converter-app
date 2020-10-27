import React from 'react';
import {View, Text} from 'react-native';
import styles from './StyleComp';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const HeaderScreen = ({title,navigation}) => {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
    <View style={styles.headStyle}>
      <IconAntDesign
       name="menuunfold"
       color="#FFD858"
       style={{alignSelf:'center'}}
       size={30}
       onPress={openMenu}
       />
      <Text style={styles.headerStyle}>{title}</Text>
    </View>
  );
}

export default HeaderScreen;
