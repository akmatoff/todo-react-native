import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/Foundation'
import { secondaryColor, primaryColor } from '../consts'

export default function Task(props) {
    const taskPress = (i) => {
        console.log(i)
    }

    return(
        <TouchableHighlight onPress={taskPress(key)}>
            <View style={styles.singleTask}>
            
                {/* Checkbox. Return elements depending on whether the task is completed or not. */}
                {props.completed ? <Icon name='checkbox' size={22} color={primaryColor}></Icon> : <View style={styles.checkbox}></View>} 

                <Text>{props.title}</Text>

            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    singleTask: {
        backgroundColor: secondaryColor,
        borderRadius: 10,
        marginTop: 10,
        paddingHorizontal: 17,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkbox: {
        height: 15,
        width: 15,
        borderWidth: 2,
        borderRadius: 3,
        borderColor: primaryColor,
        marginRight: 10 
    }
})