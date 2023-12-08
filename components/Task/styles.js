import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Item:{
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
        backgroundColor: '#99FFFF',
        alignItems: 'center'
    },
        ChildItemText:{
        flex: 8,
    },
        ItemNumber:{
        margin: 10,
    },
        ItemText:{
        margin: 10,
    },
  })

  export default styles