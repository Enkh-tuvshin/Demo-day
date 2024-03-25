import { useUser } from '@clerk/clerk-expo';
import { StyleSheet, Text, View } from 'react-native';

import ProfilePicture from './components/ProfilePicture';

export default function Profile(): React.ReactNode {
  const { user } = useUser(); 

  return (
    <View style={styles.container}>
      <ProfilePicture />
      <View>
        <Text style={{ fontSize: 24, fontWeight: '400', textAlign: 'center' }}>
          Нэр: {user?.username}
        </Text>
        <Text style={{ fontSize: 24, fontWeight: '400', textAlign: 'center' }}>Улс: Монгол</Text>
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
});
