
import { StyleSheet } from 'react-native'
import Color from "./Contains/color";


const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: Color.colorBG
    },
    Body:{
      flex: 1,
      marginTop: 30,
      flexDirection: 'column',
    },
    Header:{
      fontSize: 20, 
      fontWeight: 'bold',
      color: Color.TextHeader,
    },
    containerItem:{
      flex: 1,
      justifyContent: 'flex-start',
      // backgroundColor: '#00CC00',
    },
    
  })

  export default styles