
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'space-between',
    },
    Body:{
      flex: 1,
      marginTop: 30,
      flexDirection: 'column',
      backgroundColor: '#FFFF99'
    },
    Header:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#83C3D7',
    },
    containerItem:{
      flex: 1,
      justifyContent: 'flex-start',
      // backgroundColor: '#00CC00',
    },
    Bottom:{
      // flex:1,
      // width: 'auto',
      flexDirection: 'row',
      // alignItems: 'center',
    },
    BottomContainer:{
      paddingHorizontal: 5,
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    BottomItemTextInput:{
      flex: 1,
      borderRadius: 20,
      borderWidth: 1.5,
      borderColor: '#0099FF',
      backgroundColor: '#99FFFF',
      padding: 10,
    },
    BottomItemImg:{
      width: 40,
      height: 40,
    },
    // TextInput:{
    //   flex: 3,
    //   // width: 'auto',
    //   borderRadius: 20,
    //   borderWidth: 1.5,
    //   borderColor: '#0099FF',
    //   backgroundColor: '#99FFFF',
    //   padding: 20,
    // },
    Img:{
      flex: 1,
      width: 40,
      height: 40,
    }
  })

  export default styles