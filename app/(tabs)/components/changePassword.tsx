import React, { useState } from 'react';
import { View, TextInput, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';

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

  return (
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
  }
});

export default ChangePassword;
