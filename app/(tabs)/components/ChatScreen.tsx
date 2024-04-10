/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUser } from '@clerk/clerk-expo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { Link } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';

import { Back } from '@/assets/icons/Back';
import { SendChat } from '@/assets/icons/SendChat';

interface Message {
  id: string;
  text: string;
}

export default function ChatApp(): React.ReactNode {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const { user } = useUser();

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async (): Promise<void> => {
    try {
      const storedMessages = await AsyncStorage.getItem('chatMessages');
      if (storedMessages !== null) {
        setMessages(JSON.parse(storedMessages));
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  const saveMessage = async (newMessage: Message): Promise<void> => {
    try {
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      await AsyncStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
    } catch (error) {
      console.error('Error saving message:', error);
    }
  };

  const handleSendMessage = (): void => {
    if (message.trim() !== '') {
      const newMessage: Message = {
        id: String(Date.now()),
        text: message.trim(),
      };
      saveMessage(newMessage);
      setMessage('');
    }
  };

  const Header = (): React.ReactNode => {
    return (
      <View style={styles.header}>
        <View style={styles.backIcon}>
          <Link href="/">
            <Back />
          </Link>
        </View>
        <Text style={{ fontSize: 20, fontWeight: '600', color: 'black' }}>Чатлах</Text>
      </View>
    );
  };

  return (
    <View style={{ paddingTop: Constants.statusBarHeight, flex: 1, backgroundColor: 'white' }}>
      <Header />
      <View style={styles.container}>
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                }}>
                {user?.username}:
              </Text>
              <Text
                style={{
                  margin: 10,
                  borderWidth: 1,
                  borderRadius: 10,
                  width: '50%',
                  padding: 10,
                }}>
                {item.text}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Type your message"
        />
        <TouchableOpacity onPress={handleSendMessage}>
          <SendChat />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  backIcon: {
    position: 'absolute',
    left: 0,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
