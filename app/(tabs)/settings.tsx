import { useAuth } from '@clerk/clerk-expo';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native';

import { Profile } from '@/assets/icons/Profile';

export default function Settings(): React.ReactNode {
  const { signOut, isSignedIn } = useAuth();
  const [isEnabled, setIsEnabled] = useState(false);

  // const toggleSwitch = (): void => {
  //   setIsEnabled((prev) => !prev);
  // };

  const handleSignOut = (): void => {
    console.log(isSignedIn);
    signOut()
      .then(() => {
        router.push('./components/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{ padding: 30 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Өнгө</Text>
        <View style={styles.Line1}>
          <Text style={styles.text}>Хар</Text>
          <Switch
            trackColor={{ false: 'light', true: 'dark' }}
            value={isEnabled}
            onChange={() => setIsEnabled(isEnabled ? false : true)}
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
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}>
            <View>
              <Profile />
            </View>
            <Text style={{ fontSize: 24, fontWeight: '500' }}>Нүүр хуудас</Text>
          </View>
        </Link>
      </View>

      {/* 3 */}

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
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
          onPress={handleSignOut}>
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'red', fontSize: 24, fontWeight: 'bold' }}>Гарах</Text>
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
