import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Camera } from '@/assets/icons/Camera';
import { Gallery } from '@/assets/icons/Gallery';

export default function Profile() {
  const [username, setUserName] = useState('');
  const [mongolia, setMongolia] = useState('');
  const [image, setImage] = useState<any>(null);
  const [a, seta] = useState(false);

  const captureImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 4,
    });
    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // if (result.assets) {
    //   seta(true);
    // }
    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const ProfilePicture = () => {
    return (
      <View style={{ margin: 10, borderWidth: 1, borderColor: 'black', borderRadius: 10 }}>
        <View style={styles.image}>
          <Image
            source={{ uri: image?.uri }}
            style={
              a
                ? { display: 'none' }
                : {
                    display: 'flex',
                    width: 150,
                    height: 150,
                    borderRadius: 100,
                    borderWidth: 3,
                    borderColor: 'black',
                  }
            }
          />
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={pickImage}>
              {/* <Text style={a ? { display: 'none' } : { display: 'flex' }}>Choose photo</Text> */}
              <Gallery />
            </TouchableOpacity>
            <TouchableOpacity onPress={captureImage}>
              {/* <Text style={a ? { display: 'none' } : { display: 'flex' }}>Take photo</Text> */}
              <Camera />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ProfilePicture />
      <View>
        <Text style={{ fontSize: 24, fontWeight: '400', textAlign: 'center' }}>
          Нэр: {username}
        </Text>
        <Text style={{ fontSize: 24, fontWeight: '400', textAlign: 'center' }}>
          Улс: {mongolia}
        </Text>
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
  image: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    margin: 30,
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
