import { Link } from 'expo-router';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Login () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  }

  return (
    <View style={styles.container}>
      {/* <Image source={{ uri: require('../../assets/tv-logo.jpg') }} height={100} width={100} /> */}
      <Text style={styles.logo}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SIGN IN WITH GOOGLE ACCOUNT</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', gap: 4, margin: 10 }}>
        <Text>You don't have a account?</Text>
        <Link href={'/(tabs)/components/signup'}>
          <Text style={{ color: 'blue' }}>LOGIN</Text>
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
    color: '#007bff',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#f0f0f0',
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
    backgroundColor: '#007bff',
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
