import { useSignIn } from '@clerk/clerk-expo';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Login(): React.ReactNode {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPress = async (): Promise<void> => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: username,
        password,
      });
      await setActive({ session: completeSignIn.createdSessionId });
      router.replace('/');
    } catch (err: unknown) {
      console.log(JSON.stringify(err));
    }
    console.log('username:', username);
    console.log('password:', password);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Mongol TV</Text>
      <Text style={{ width: '80%', textAlign: 'left', marginBottom: 5 }}>Нэвтрэх нэр</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Нэр"
          placeholderTextColor="gray"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <Text style={{ width: '80%', textAlign: 'left', marginBottom: 5 }}>Нууц үг</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Нууц үг"
          placeholderTextColor="gray"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Link href={'/'} style={{ width: '80%', textAlign: 'right' }}>
        <Text>Нууц үгээ мартсан уу?</Text>
      </Link>
      <TouchableOpacity style={styles.loginBtn} onPress={() => onSignInPress()}>
        <Text style={styles.loginText}>Нэвтрэх</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Goolge account - аар нэвтрэх</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', gap: 4, margin: 10 }}>
        <Text>You don't have a account?</Text>
        <Link href={'/(tabs)/components/signup'}>
          <Text style={{ color: 'blue' }}>Бүртгүүлэх</Text>
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
