import { useSignUp } from '@clerk/clerk-expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

WebBrowser.maybeCompleteAuthSession();

export default function Login(): React.ReactNode {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selected, setSelected] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const data = [{ key: '5', value: 'Монгол' }];

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

  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
        width={100}
        height={100}
      />
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
          // eslint-disable-next-line react/jsx-boolean-value
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={toggleShowPassword} activeOpacity={0.5}>
          <MaterialCommunityIcons size={24} color="#000" name={showPassword ? 'eye-off' : 'eye'} />
        </TouchableOpacity>
      </View>
      <Text style={{ width: '80%', textAlign: 'left', marginBottom: 5 }}>Улс орон:</Text>
      <SelectList
        boxStyles={{ width: '80%' }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        <Link href="/(tabs)/components/login">
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
    fontSize: 45,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  inputText: {
    width: '80%',
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
