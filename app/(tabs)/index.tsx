import { Repeat } from '@/assets/icons/Repeat';
import { Camera, CameraType, WhiteBalance } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import { Microphone } from '@/assets/icons/Microphone';

export default function TabTwoScreen() {
  const [type, setType] = useState(CameraType.front);
  const [user, setUser] = useState(CameraType.front);

  const [camera, setCamera] = useState<any>(null);
  const [camera2, setCamera2] = useState<any>(null);

  const [status, requestPermission] = Camera.useCameraPermissions();

  if (!status || !status.granted) {
    return (
      <View style={styles.container}>
        <Text>Give camera permission</Text>
        <Button title="Enable camera" onPress={requestPermission} />
      </View>
    );
  }

  const handleFlipCamera = () => {
    setUser(user === CameraType.front ? CameraType.back : CameraType.front);
  };

  return (
    <View style={styles.container}>
      <Camera
        style={{ flex: 1, height: '100%', width: 'auto' }}
        type={type}
        ref={(ref) => setCamera(ref)}>
        <Text>.</Text>
      </Camera>

      <Camera
        style={{ flex: 1, height: 'auto', width: 'auto' }}
        type={user}
        ref={(ref) => setCamera2(ref)}>
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={handleFlipCamera}>
            <Repeat />
          </TouchableOpacity>
          <TouchableOpacity>
            <Microphone />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', height: 252 }}>
          <TouchableOpacity
            style={{
              width: '50%',
              height: 50,
              backgroundColor: 'red',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            activeOpacity={0.7}>
            <Text style={{ color: '#fff' }}>Back</Text>
          </TouchableOpacity>
          <View style={{ width: '100%' }}>
            <TouchableOpacity
              style={{
                width: '50%',
                height: 50,
                backgroundColor: 'green',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.7}>
              <Text style={{ color: '#fff' }}>Start</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
      <TouchableOpacity activeOpacity={0.4}>
        <View style={styles.chat}>
          <Text>Chat</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
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
  chat: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 18,
  },
});
