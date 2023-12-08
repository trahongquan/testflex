//rnfe : react native function export
import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './styles'

const Task = () => {
  return (
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
  )
}

export default Task