import { useUser } from '@clerk/clerk-expo';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { Camera } from '@/assets/icons/Camera';
import { Gallery } from '@/assets/icons/Gallery';

export default function ProfilePicture(): React.ReactNode {
  const [image, setImage] = useState<null | any>(null);
  const [a, seta] = useState(false);
  const { user } = useUser();
  console.log(user?.primaryWeb3WalletId);

  const captureImage = async (): Promise<void> => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 4,
    });
    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const pickImage = async (): Promise<void> => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

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
            <Gallery />
          </TouchableOpacity>
          <TouchableOpacity onPress={captureImage}>
            <Camera />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    margin: 30,
  },
});
