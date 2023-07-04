import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/components/ChatListIem';
import ChatsScreen from './src/screens/ChatsScreen';
import ChatScreen from './src/screens/ChatScreen';
import Navigator from './src/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator/>
      <StatusBar style="auto" />
    </View>
  );
}

const chat = {
  id: "1",
  user: {
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
    name: "Lukas",
  },
  lastMessage: {
    text: "Oke",
    createdAt: "07:30",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
    paddingVertical: 50,
  },
});
