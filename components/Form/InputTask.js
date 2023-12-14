import { View, TextInput, Image, KeyboardAvoidingView,
  Keyboard, Platform, TouchableOpacity } from 'react-native'
import styles from "./StyleInputTask";
import React, { useState } from 'react';

const InputTask = (props) => {
  const [text, settext] = useState("")
  const addTask = () => {
    if(text.length===0){
      alert("Vui lòng nhập Công việc"); 
      return false
    } 
    else{
      // alert(props.onAddTask)
      props.onAddTask(text);
      settext("") // Set lại TextInput bằng rỗng
      Keyboard.dismiss() // Khi add Task xong sẽ tự động tắt bàn phím
    }
  }
  return (
    <KeyboardAvoidingView
    keyboardVerticalOffset={10}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.Bottom}>
        <View style={styles.BottomContainer}>
            <View style={styles.BottomItemTextInput}>
                <TextInput
                value={text} // Dùng để set lại input bằng rỗng
                style={styles.TextInput}
                onChangeText={(text) => settext(text)}
                placeholder="Aa"/>
            </View>
            <TouchableOpacity
            onPress={addTask}>
              <View style={styles.BottomItemImg}>
                  <Image style={styles.Img} source={require('./../../assets/add-icon.png')} />
              </View>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default InputTask