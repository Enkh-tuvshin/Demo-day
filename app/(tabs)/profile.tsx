import { useUser } from '@clerk/clerk-expo';
import Constants from 'expo-constants';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import ProfilePicture from './components/ProfilePicture';

import { Back } from '@/assets/icons/Back';

export default function Profile(): React.ReactNode {
  const { user } = useUser();

  const data = {
    title: "Монгол" 
  }

  const Header = (): React.ReactNode => {
    return (
      <View style={styles.header}>
        <View style={styles.backIcon}>
          <Link href="(tabs)/settings">
            <Back />
          </Link>
        </View>
        <Text style={{ fontSize: 20, fontWeight: '600', color: 'black' }}>Нүүр хуудас</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: Constants.statusBarHeight }}>
      <Header />
      <View style={styles.container}>
        <ProfilePicture />
        <View>
          <Text style={{ fontSize: 24, fontWeight: '400', textAlign: 'center' }}>
            Нэр: {user?.username}
          </Text>
          <Text style={{ fontSize: 24, fontWeight: '400', textAlign: 'center' }}>
            Улс: {data.title}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
