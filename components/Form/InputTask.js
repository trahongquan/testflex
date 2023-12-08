import { View, TextInput, Image, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import styles from "./StyleInputTask";
import React from 'react'

const InputTask = () => {
  return (
    <KeyboardAvoidingView
    keyboardVerticalOffset={10}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.Bottom}>
        <View style={styles.BottomContainer}>
            <View style={styles.BottomItemTextInput}>
                <TextInput style={styles.TextInput}
                placeholder="Aa"/>
            </View>
            <TouchableOpacity>
              <View style={styles.BottomItemImg}>
                  <Image style={styles.Img} source={require('./../../assets/add-icon.png')} />
              </View>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default InputTask