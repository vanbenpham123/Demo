import React from "react";
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import { FlatList } from "react-native";
import ChatListItem from "../components/ChatListIem";
import chats from '../../assets/data/chats.json';
import bg from '../../assets/images/BG.png';
import Message from '../components/Message';
import messages from '../../assets/data/messages.json';
import InputBox from "../components/InputBox";
import { KeyboardAvoidingView, Platform } from "react-native";


const ChatScreen = () => {
    return(
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding': 'height'} 
            style={styles.bg}
        >
            <ImageBackground source={bg} style={styles.bg}>
                <FlatList
                    data={messages}
                    renderItem={({item}) => <Message message={item} />}
                    style={styles.list}
                    inverted
                />
                <InputBox />
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    list: {
        padding: 10,
    }
})


export default ChatScreen;