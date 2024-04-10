/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useUser } from '@clerk/clerk-expo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function ProfilePicture(): React.ReactNode {
  const [a, seta] = useState(false);
  const { user } = useUser();
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  console.log(profilePicture);

  const saveProfilePicture = async (imageUri: string): Promise<void> => {
    try {
      setProfilePicture(imageUri);
      await AsyncStorage.setItem('profilePicture', imageUri);
    } catch (error) {
      console.error('Error saving profile picture:', error);
    }
  };

  useEffect(() => {
    const getProfilePicture = async (): Promise<void> => {
      try {
        const result = await AsyncStorage.getItem('profilePicture');
        console.log(result);
        setProfilePicture(result);
      } catch (error) {
        console.log(error);
      }
    };
    getProfilePicture();
  }, []);

  const pickImage = async (): Promise<void> => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      saveProfilePicture(result.assets[0].uri);
    }
  };

  return (
    <View>
      <View style={styles.image}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={{ uri: String(profilePicture) }}
            style={
              a
                ? { display: 'none' }
                : {
                    display: 'flex',
                    width: 130,
                    height: 130,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: 'black',
                    margin: 10,
                  }
            }
          />
        </TouchableOpacity>
        <Text>{a ? 'No picture' : ''}</Text>
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
    marginHorizontal: 20,
  },
});
