import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Profile() {
  const [username, setUserName] = useState('');
  const [mongolia, setMongolia] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Text>Take photo</Text>
      </View>
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Your: {username}</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Country: {mongolia}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    margin: 25,
  },
});
