import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Currdisplay from './src/screens/Currdisplay';
import Currconv from './src/screens/Currconv';
import AddCurrency from './src/screens/AddCurrency';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Currencies">
        <Drawer.Screen name="Currencies" component={Currdisplay} />
        <Drawer.Screen name="Convert" component={Currconv} />
        <Drawer.Screen name="Add new currency" component={AddCurrency} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
