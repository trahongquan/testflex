import { StyleSheet } from 'react-native'

const styles=StyleSheet.create({
    BottomContainer:{
        paddingHorizontal: 5,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      BottomItemTextInput:{
        marginHorizontal: 5,
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
      },
      Bottom:{
        // marginBottom: 5,
        flexDirection: 'row',
      },
})
export default styles