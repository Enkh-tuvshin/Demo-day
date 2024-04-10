import { useUser } from '@clerk/clerk-expo';
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';

import ProfilePicture from './components/ProfilePicture';

export default function Profile(): React.ReactNode {
  const { user } = useUser();

  const data = {
    title: 'Монгол',
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: Constants.statusBarHeight }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <ProfilePicture />
          <View
            style={{
              flexDirection: 'column',
              paddingHorizontal: 5,
              right: 10,
            }}>
            <Text style={{ fontSize: 24, fontWeight: '400' }}>Нэр: {user?.username}</Text>
            <Text style={{ fontSize: 24, fontWeight: '400' }}>Улс: {data.title}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
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
});
