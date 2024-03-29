import { useUser } from '@clerk/clerk-expo';
import Constants from 'expo-constants';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Back } from '@/assets/icons/Back';
import { SendChat } from '@/assets/icons/SendChat';
import { Trash } from '@/assets/icons/Trash';

interface Message {
  id: string;
  text: string;
}

const ChatScreen = (): React.ReactNode => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const { user } = useUser();

  const handleSend = (): React.ReactNode => {
    if (inputText.trim() === '') return;
    const newMessage: Message = {
      id: String(messages.length + 1),
      text: inputText,
    };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const Header = (): React.ReactNode => {
    return (
      <View style={styles.header}>
        <View style={styles.backIcon}>
          <Link href={'/'}>
            <Back />
          </Link>
        </View>
        <Text style={{ fontSize: 20, fontWeight: '600', color: 'black' }}>Settings</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, paddingTop: Constants.statusBarHeight, backgroundColor: 'white' }}>
      <Header />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 10,
        }}>
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              <Text>{user?.username}:</Text>
              <View style={styles.lowCont}>
                <Text style={styles.text}>{item.text}</Text>
                <TouchableOpacity onPress={handleDelete}>
                  <Trash />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          inverted
        />
      </View>
      <View
        style={{
          margin: 10,
          flexDirection: 'row',
          alignItems: 'center',
          bottom: 0,
        }}>
        <TextInput
          style={{
            flex: 1,
            marginRight: 10,
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 5,
          }}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          placeholder="Type your message here..."
        />
        <TouchableOpacity onPress={handleSend} style={styles.Button}>
          <SendChat />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Button: {
    margin: 10,
  },
  text: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: Constants.statusBarHeight,
  },
  backIcon: {
    position: 'absolute',
    left: 0,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowCont: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ChatScreen;
