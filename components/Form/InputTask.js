<<<<<<< HEAD
import { View, TextInput, Image, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import styles from "./StyleInputTask";
import React from 'react';
import Dialog from "react-native-popup-dialog";
// import * as Notifications from 'expo-notifications';

// async function getNotificationToken(){
//   const {status} =  await Notifications.getPermissionsAsynsc()
//   if(status !== 'granted'){
//       const {status} =  await Notifications.requestgetPermissionsAsynsc()
//       if(status !== 'granted'){
//         alert('failed')
//         return
//       }
//   }
//   const tokenData = await Notifications.getPermissionsAsynsc()
//   const token = tokenData.data
//   return token
// }

// Notifications.setNotificationHandler({
//   handleNotification: async () ({
//   shouldShowAlert: true, 
//   shouldPlaySound: false, 
//   shouldSetBadge: false, 
//   }), 
// }),

const InputTask = () => {

  const [isDialogVisible, setDialogVisible] = React.useState(false);

  const showDialog = () => {
    setDialogVisible(true);
  };

  const handlePress = () => {
    // Hiển thị dialog khi bấm vào BottomItemImg
    Alert.alert("Thông báo", "Bạn đã bấm vào BottomItemImg!");
    showDialog();
  };

  const handleDialogClose = () => {
    // Đóng dialog khi người dùng nhấn vào nút đóng hoặc bên ngoài dialog
    setDialogVisible(false);
  };
=======
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
>>>>>>> 6d570d76c788ccdf169c0125ddbf3a4eeb93faf8
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
<<<<<<< HEAD
            <TouchableOpacity onPress={handlePress} >
=======
            <TouchableOpacity
            onPress={addTask}>
>>>>>>> 6d570d76c788ccdf169c0125ddbf3a4eeb93faf8
              <View style={styles.BottomItemImg}>
                  <Image style={styles.Img} source={require('./../../assets/add-icon.png')} />
              </View>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default InputTask