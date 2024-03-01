import { useAuth } from '@clerk/clerk-expo';
import CheckBox from 'expo-checkbox';
import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, useColorScheme } from 'react-native';

export default function Settings() {
  const { signOut } = useAuth();
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ padding: 30 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Theme</Text>
        <View style={styles.Line1}>
          <Text style={styles.text}>Dark</Text>
          <CheckBox
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? '' : undefined}
          />
        </View>
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 24 }}>Light</Text>
          <CheckBox
            value={isChecked1}
            onValueChange={setIsChecked1}
            color={isChecked1 ? '' : undefined}
          />
        </View>
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 24 }}>Default</Text>
          <CheckBox
            value={isChecked2}
            onValueChange={setIsChecked2}
            color={isChecked2 ? '' : undefined}
          />
        </View>
      </View>

      {/* 2 */}

      <View
        style={{
          height: 100,
          borderWidth: 2,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Link href={'/(tabs)/profile'}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}>
              <Text>Prf</Text>
            </View>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Profile</Text>
          </View>
        </Link>
      </View>

      {/* 3 */}

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 80,
            borderWidth: 3,
            borderColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}
          onPress={() => signOut}>
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'red', fontSize: 24, fontWeight: 'bold' }}>Log out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  Line1: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
