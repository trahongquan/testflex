import { Text, View, ScrollView,KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import styles from './App.Style'
import Task from './components/Task/index'
import InputTask from './components/Form/InputTask'

export default function App() {
  const [listTask, setlistTask] = useState([])
  const handleAddTask = (text) => {
    //alert(text)
    //cú pháp sử dụng Spread Operator để tạo một bản sao của mảng listTask 
    // và thêm một phần tử mới là Task vào cuối mảng.
    setlistTask([...listTask,text]) 
  }
  const DelPressLong = () => {
    // alert("Xóa nó?")
    console.log("Xóa item");
  }
  return (
    <View style={styles.container}>
      <View style={styles.Body}>
            <Text style={styles.Header}>Todo List</Text>
          <View style={styles.containerItem}>
            <ScrollView>
              {
                listTask.map((item,index) => {
                  return <Task key={index} title={item} number={index+1} onDeletePressLong={DelPressLong} />
                })
              }
            </ScrollView>
          </View>
      </View>
        {/* <InputTask onAddTask={() => console.log('xin chao')}/>  */}
        <InputTask onAddTask={handleAddTask}/> 
    </View>
  )
}


