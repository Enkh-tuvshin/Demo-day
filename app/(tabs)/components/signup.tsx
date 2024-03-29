import { SelectList } from 'react-native-dropdown-select-list';
import { useSignUp } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SectionList } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

// const COUNTRIES = [
//   {
//     data: ['Japan', 'Korea', 'English', 'Mongolia'],
//   },
// ];

export default function Login(): React.ReactNode {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selected, setSelected] = useState('');

  const data = [
    { key: '1', value: 'USA' },
    { key: '2', value: 'South Korea' },
    { key: '3', value: 'Japan' },
    { key: '4', value: 'India' },
    { key: '5', value: 'Монгол' },
  ];

  const onSignUpPress = async (): Promise<void> => {
    if (!isLoaded) {
      return;
    }
    try {
      const completeSignUp = await signUp.create({
        username,
        password,
      });
      await setActive({ session: completeSignUp.createdSessionId });
      router.push('/');
    } catch (err: unknown) {
      console.error(JSON.stringify(err, null, 2));
    }
    console.log(username);
    console.log(password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Mongol TV</Text>
      <Text style={{ width: '80%', textAlign: 'left', marginBottom: 5 }}>Шинэ бүртгэлийн нэр:</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Нэр"
          placeholderTextColor="#gray"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <Text style={{ width: '80%', textAlign: 'left', marginBottom: 5 }}>Шинэ нууц үг:</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Нууц үг"
          placeholderTextColor="gray"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Text style={{ width: '80%', textAlign: 'left', marginBottom: 5 }}>Улс орон:</Text>
      <SelectList
        boxStyles={{ width: '80%' }}
        setSelected={(val: any) => setSelected(val)}
        data={data}
        save="value"
      />
      <TouchableOpacity style={styles.loginBtn} onPress={onSignUpPress}>
        <Text style={styles.loginText}>Бүртгүүлэх</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Google account - аар нэвтрэх</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', gap: 4, margin: 10 }}>
        <Text>Аль хэдийн бүртгэлтэй юу?</Text>
        <Link href={'/(tabs)/components/login'}>
          <Text style={{ color: 'blue' }}>Нэвтрэх</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#000',
    marginBottom: 40,
  },
  inputContView: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputView: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  inputText1: {
    width: '50%',
    height: 50,
    color: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  inputText2: {
    width: '50%',
    height: 50,
    color: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#000',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: 'white',
  },
});
