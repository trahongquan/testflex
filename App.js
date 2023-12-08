import { Text, View, ScrollView,KeyboardAvoidingView } from 'react-native'
import React from 'react'
import styles from './App.Style'
import Task from './components/Task/index'
import InputTask from './components/Form/InputTask'

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
        <InputTask/> 
    </View>
  )
}


