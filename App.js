import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Body}>
            <Text style={styles.Header}>Todo List</Text>
          <View style={styles.containerItem}>
            <ScrollView>
              <TouchableOpacity>
                <View style={styles.Item}>
                  <View style={styles.ChildItem}>
                    <View style={styles.square}>
                      <Text style={styles.ItemNumber}>1</Text>
                    </View>
                  </View>
                  <View style={styles.ChildItemText}>
                    <Text style={styles.ItemText}>Item1</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.Item}>
                  <View style={styles.ChildItem}>
                    <View style={styles.square}>
                      <Text style={styles.ItemNumber}>2</Text>
                    </View>
                  </View>
                  <View style={styles.ChildItemText}>
                    <Text style={styles.ItemText}>Item2</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.Item}>
                  <View style={styles.ChildItem}>
                    <View style={styles.square}>
                      <Text style={styles.ItemNumber}>3</Text>
                    </View>
                  </View>
                  <View style={styles.ChildItemText}>
                    <Text style={styles.ItemText}>Item3</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.Item}>
                  <View style={styles.ChildItem}>
                    <View style={styles.square}>
                      <Text style={styles.ItemNumber}>3</Text>
                    </View>
                  </View>
                  <View style={styles.ChildItemText}>
                    <Text style={styles.ItemText}>Item3</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.Item}>
                  <View style={styles.ChildItem}>
                    <View style={styles.square}>
                      <Text style={styles.ItemNumber}>3</Text>
                    </View>
                  </View>
                  <View style={styles.ChildItemText}>
                    <Text style={styles.ItemText}>Item3</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.Item}>
                  <View style={styles.ChildItem}>
                    <View style={styles.square}>
                      <Text style={styles.ItemNumber}>3</Text>
                    </View>
                  </View>
                  <View style={styles.ChildItemText}>
                    <Text style={styles.ItemText}>Item3</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.Item}>
                  <View style={styles.ChildItem}>
                    <View style={styles.square}>
                      <Text style={styles.ItemNumber}>3</Text>
                    </View>
                  </View>
                  <View style={styles.ChildItemText}>
                    <Text style={styles.ItemText}>Item3</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.Item}>
                  <View style={styles.ChildItem}>
                    <View style={styles.square}>
                      <Text style={styles.ItemNumber}>3</Text>
                    </View>
                  </View>
                  <View style={styles.ChildItemText}>
                    <Text style={styles.ItemText}>Item3</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.Item}>
                  <View style={styles.ChildItem}>
                    <View style={styles.square}>
                      <Text style={styles.ItemNumber}>3</Text>
                    </View>
                  </View>
                  <View style={styles.ChildItemText}>
                    <Text style={styles.ItemText}>Item3</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.Item}>
                  <View style={styles.ChildItem}>
                    <View style={styles.square}>
                      <Text style={styles.ItemNumber}>3</Text>
                    </View>
                  </View>
                  <View style={styles.ChildItemText}>
                    <Text style={styles.ItemText}>Item3</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.Item}>
                  <View style={styles.ChildItem}>
                    <View style={styles.square}>
                      <Text style={styles.ItemNumber}>3</Text>
                    </View>
                  </View>
                  <View style={styles.ChildItemText}>
                    <Text style={styles.ItemText}>Item3</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
      </View>
      <View style={styles.Bottom}>
        <View style={styles.BottomContainer} >
          <View style={styles.BottomItemTextInput}>
              <TextInput style={styles.TextInput}
              onChangeText={(text) => {
                // Xử lý giá trị của thẻ nhập text
              }}
              placeholder="Nhập tên của bạn"
              />
          </View>
          <View style={styles.BottomItemImg}>
            <Image style={styles.Img} source={require('./assets/add-icon.png')} />
          </View>
        </View>
      </View>
    </View>
  )
}

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
