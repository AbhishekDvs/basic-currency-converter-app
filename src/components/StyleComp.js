import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 20,
    fontFamily:'notoserif',
    fontStyle:'italic',
    textAlign: 'justify',
    color: '#FFD858',
  },
  headStyle:{
    flexDirection: 'row',
    backgroundColor:'#0f274d',
  },
  headerStyle: {
    fontSize: 30,
    padding: 20,
    fontFamily:'notoserif',
    fontStyle:'normal',
    textAlign: 'center',
    justifyContent: 'space-evenly',
    color: '#FFD858',
    flexDirection:'row'
  },
  viewStyle: {
    backgroundColor: '#122c57',
    flex: 1,
    justifyContent: 'space-between',
  },
  inputBarStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  buttonStyle:{
    alignItems: "center",
    backgroundColor: "#185b69",
    borderRadius: 10,
    marginHorizontal:50,
    paddingHorizontal:3,
  }
});

export default styles;
