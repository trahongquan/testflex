import { StyleSheet } from 'react-native';
import Color from '../../Contains/color';

const styles = StyleSheet.create({
    Item:{
        flex:1,
        padding: 10,
        margin: 10,
        flexDirection: 'row',
        borderRadius:10,
        backgroundColor: '#FFFFFF',
    },
    ChildItem:{
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius:10,
        padding: 2,
        // backgroundColor: Color.BG_Color_le ,
        alignItems: 'center'
    },
        ChildItemText:{
        flex: 8,
    },
        ItemNumber:{
        marginVertical: '50%',
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    ItemText:{
        paddingVertical: 10,
        marginHorizontal: '3%',
        height: '100%',
        fontSize: 30,
        justifyContent: 'center',
    },
  })

  export default styles
  