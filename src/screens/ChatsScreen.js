import React from "react";
import {Text, View} from 'react-native';
import { FlatList } from "react-native";
import ChatListItem from "../components/ChatListIem";
import chats from '../../assets/data/chats.json'
import reactDom from "react-dom";

const ChatsScreen = () => {
    return(
        <FlatList
            data={chats}
            renderItem={({item})=> <ChatListItem chat={item} />}
        />
    )
}

export default ChatsScreen;