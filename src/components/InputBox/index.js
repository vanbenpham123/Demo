import {View, Text} from 'react-native';
import React, { useState } from 'react';
import {AntDesign, MaterialIcons} from '@expo/vector-icons'
import { TextInput, StyleSheet } from 'react-native';


const InputBox = () => {
    const [newMessage, setMessage] = useState('');

    const onSend = () => {
        console.warn('Sending a message: ', newMessage);
        setMessage('');
    }

    return(
        <View style={styles.container}>
            <AntDesign name='plus' size={20} color='royalblue' />

            <TextInput 
                style={styles.input} 
                placeholder='Type your message....' 
                value={newMessage}
                onChangeText={setMessage}
            />

            <MaterialIcons style={styles.send} name='send' size={16} color='white' onPress={onSend}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 50,
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth,
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
    },
    send: {
        backgroundColor: 'royalblue',
        padding: 7,
        borderRadius: 15,
        overflow: 'hidden'
    }

})


export default InputBox;