//rnfe : react native function export
import { View, Text , TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react';
import styles from './styles'
import Color from '../../Contains/color';

const Task = (props) => {
    
    const {number} = props
    const {title} = props
    const numberText = number < 10 ? `0${number}` : number
    const titleText = title
    const onDeletePress = () => {
        props.onDeletePressLong()
    }

    const [isLongPressed, setIsLongPressed] = useState(false);
    
    return (
    <TouchableWithoutFeedback
    onLongPress={() => setIsLongPressed(true)}
    onPressOut={() => setIsLongPressed(false)}>
    {/* <TouchableOpacity> */}
        <View style={styles.Item}>
            <View 
            style={[styles.ChildItem, { backgroundColor: number % 2 === 0 ? Color.BG_Color_chan : Color.BG_Color_le }]}>
                <View>
                    <Text style={styles.ItemNumber}>{numberText}</Text>
                </View>
            </View>
            <View style={styles.ChildItemText}>
                <Text style={styles.ItemText}>{titleText}</Text>
            </View>

            {isLongPressed && (
            <TouchableOpacity onPress={onDeletePress}>
                <View>
                    <Text>Xóa</Text>
                </View>
            </TouchableOpacity>
            )}
        </View>
        {/* </TouchableOpacity> */}
    </TouchableWithoutFeedback>

  )
}

export default Task