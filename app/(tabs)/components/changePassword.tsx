import Constants from 'expo-constants';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';

import { Back } from '@/assets/icons/Back';

export const ChangePassword = (): React.ReactNode => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleUpdatePassword = (): void => {
    if (currentPassword === '' || newPassword === '' || confirmNewPassword === '') {
      Alert.alert('All fields are required');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      Alert.alert('New passwords do not match');
      return;
    }

    fetch('https://your-api.com/update-password', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currentPassword,
        newPassword,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update password');
        }
        return response.json();
      })
      .then((data) => {
        Alert.alert('Password updated successfully');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
      });
  };

  const Header = (): React.ReactNode => {
    return (
      <View style={styles.header}>
        <View style={styles.backIcon}>
          <Link href={'(tabs)/components/login'}>
            <Back />
          </Link>
        </View>
        <Text style={{ fontSize: 20, fontWeight: '600', color: 'black' }}>Change Password</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: Constants.statusBarHeight }}>
      <Header />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Current Password"
          secureTextEntry
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          secureTextEntry
          value={confirmNewPassword}
          onChangeText={setConfirmNewPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleUpdatePassword}>
          <Text>Change password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    margin: 10,
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
});

export default ChangePassword;
