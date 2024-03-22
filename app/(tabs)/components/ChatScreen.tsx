import { useUser } from '@clerk/clerk-expo';
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

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

  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              <Text>{user?.username}:</Text>
              <View style={{ width: '50%' }}>
                <Text style={styles.text}>
                  {item.text} <Trash />
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          inverted
        />
      </View>
      <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center', bottom: 0 }}>
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
    </>
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
});

export default ChatScreen;
