import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container} >
      <View style={styles.Top}>
        <Text style={styles.text}>Top</Text>
      </View>
      <View style={styles.Bottom}>
        <View style={styles.BottomLeft}>
          <Text>Bottom left</Text>
        </View>
        <View style={styles.BottomRight}>
          <View style={styles.RightBottomTop}>
            <Text>Right Bottom Top</Text>
          </View>
          <View style={styles.RightBottomBottom}>
            <Text>Right Bottom Bottom</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text:{
    // color: 'black',
    // alignSelf: 'center',
    // textAlign: 'center'
  },
  Top:{
    flex:1,
    backgroundColor: '#F3FE7D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Bottom:{
    flex:1,
    backgroundColor: '#37EB7A',
    flexDirection: 'row',
  },
  BottomLeft:{
    flex:1,
    backgroundColor: '#37EB7A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomRight:{
    flex:1,
    backgroundColor: 'white',
  },
  RightBottomTop:{
    flex:2,
    backgroundColor: '#EA35E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RightBottomBottom:{
    flex:1,
    backgroundColor: '#2776AA',
    justifyContent: 'center',
    alignItems: 'center',
  },


});
