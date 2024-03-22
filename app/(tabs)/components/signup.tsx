import { useSignUp } from '@clerk/clerk-expo';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Login(): React.ReactNode {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signup = async (): Promise<void> => {
    console.log(setActive, signUp);

    if (!isLoaded) {
      return;
    }

    try {
      const CompleteSignup = await signUp.create({
        username,
        password,
      });
      await setActive({ session: CompleteSignup.createdSessionId });
      router.replace('/');
    } catch (err: unknown) {
      console.error(JSON.stringify(err, null, 2));
    }
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      {/* <Image source={{ uri: require('../../assets/tv-logo.jpg') }} height={100} width={100} /> */}
      <Text style={styles.logo}>Mongol TV</Text>
      <Text style={{ width: '80%', textAlign: 'left', marginBottom: 5 }}>Шинэ бүртгэлийн нэр</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Нэр"
          placeholderTextColor="#gray"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <Text style={{ width: '80%', textAlign: 'left', marginBottom: 5 }}>Шинэ нууц үг</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Нууц үг"
          placeholderTextColor="gray"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={signup}>
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
