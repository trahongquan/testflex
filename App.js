import { Text, View, TextInput, Image, ScrollView } from 'react-native'
import React from 'react'
import Task from './components/Task/index'
import styles from './App.Style'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Body}>
            <Text style={styles.Header}>Todo List</Text>
          <View style={styles.containerItem}>
            <ScrollView>
              <Task/>
              <Task/>
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


