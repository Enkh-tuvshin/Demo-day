import { useAuth } from '@clerk/clerk-expo';
import Constants from 'expo-constants';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native';

import { Back } from '@/assets/icons/Back';
import { Logout } from '@/assets/icons/Logout';
import { Profile } from '@/assets/icons/Profile';

export default function Settings(): React.ReactNode {
  const { signOut, isSignedIn } = useAuth();
  const [isEnabled, setIsEnabled] = useState(false);
  // const theme = useColorScheme();
  // const isDarkTheme = theme === 'dark';

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

  const Header = (): React.ReactNode => {
    return (
      <View style={styles.header}>
        <View style={styles.backIcon}>
          <Link href="/">
            <Back />
          </Link>
        </View>
        <Text style={{ fontSize: 20, fontWeight: '600', color: 'black' }}>Тохиргоо</Text>
      </View>
    );
  };

  return (
    <View style={styles.innerContainer}>
      <Header />
      <View style={styles.container}>
        <View style={{ paddingVertical: 30 }}>
          <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 15 }}>Өнгө солих:</Text>
          <View style={styles.Line1}>
            <Text style={styles.text}>Хар</Text>
            <Switch value={isEnabled} onChange={() => setIsEnabled(!isEnabled)} />
          </View>
        </View>

        {/* 2 */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Link href="/(tabs)/profile">
            <View
              style={{
                flexDirection: 'row',
                width: 350,
                height: 80,
                borderWidth: 2,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
              }}>
              <Profile />
              <Text style={{ fontSize: 24, fontWeight: '500' }}>Нүүр хуудас</Text>
            </View>
          </Link>
        </View>

        {/* 3 */}

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
            onPress={handleSignOut}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
              }}>
              <Text style={{ color: 'red', fontSize: 20 }}>Гарах</Text>
              <Logout />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  backIcon: {
    position: 'absolute',
    left: 0,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  Line1: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
  },
});
