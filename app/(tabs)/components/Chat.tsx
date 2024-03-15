import Constants from 'expo-constants';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Spinner from './spinner';

import { useGetTodoListQuery } from '@/graphql/generated';

export const Chat = (): React.ReactNode => {
  const [chat, setChat] = useState('');
  const { data, error, loading } = useGetTodoListQuery();

  if (loading) return <Spinner />;

  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={style.container}>
      <View style={style.showChat}>
        <Text> Hello world</Text>
        <View>
          <Text>{chat}</Text>
        </View>
      </View>
      <View style={style.input}>
        <TextInput style={style.textInput} placeholder="Enter message" />
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={{ color: 'blue' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingTop: Constants.statusBarHeight,
  },
  showChat: {
    flex: 1,
  },
  input: {
    width: 1000,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    borderTopWidth: 1,
    padding: 10,
  },
  textInput: {
    width: 300,
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default Chat;
