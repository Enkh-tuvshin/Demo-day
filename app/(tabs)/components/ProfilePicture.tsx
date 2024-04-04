import { useUser } from '@clerk/clerk-expo';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { VideoCamera } from '@/assets/icons/Camera';
import { Gallery } from '@/assets/icons/Gallery';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfilePicture(): React.ReactNode {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [image, setImage] = useState<null | any>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [a, seta] = useState(false);
  const { user } = useUser();
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  console.log(user?.primaryWeb3WalletId);
  
  const saveProfilePicture = async (imageUri: string) => {
    try {
      setProfilePicture(imageUri);
      await AsyncStorage.setItem('profilePicture', imageUri);
    } catch (error) {
      console.error('Error saving profile picture:', error);
    }
  }

  const pickImage = async (): Promise<void> => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      saveProfilePicture(image);
    }
  };

  return (
    <View style={{ margin: 10, borderWidth: 2, borderColor: 'black', borderRadius: 10 }}>
      <View style={styles.image}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={{ uri: image?.uri }}
            style={
              a
                ? { display: 'none' }
                : {
                  display: 'flex',
                  width: 150,
                  height: 150,
                  borderWidth: 1,
                  borderRadius: 100,
                  borderColor: 'black',
                  margin: 10
                }
            }
          />
        </TouchableOpacity>
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
