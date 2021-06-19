import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Task(props) {
    return(
        <View style={styles.singleTask}>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    singleTask: {
        backgroundColor: '#f7f7f7',
        borderRadius: 10,
        marginTop: 10,
        paddingHorizontal: 17,
        height: 50,
        justifyContent: 'center'
    }
})