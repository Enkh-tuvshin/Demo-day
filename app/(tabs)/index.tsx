import { Repeat } from '@/assets/icons/Repeat';
import { Camera, CameraType } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
      <Camera style={{ flex: 1, height: '50%' }} type={type} ref={(ref) => setCamera(ref)}>
        <Text>Azaa</Text>
      </Camera>
      <Camera style={{ flex: 1, height: '50%' }} type={user} ref={(ref) => setCamera2(ref)}>
        <TouchableOpacity onPress={handleFlipCamera}>
          <Repeat />
        </TouchableOpacity>
        <TouchableOpacity>
          <Microphone />
        </TouchableOpacity>
        <View
          style={{ flexDirection: 'row', height: '100%', width: '100%', alignItems: 'flex-end' }}>
          <TouchableOpacity style={{ width: '50%', height: 50, backgroundColor: 'red' }}>
            <Text style={{ color: 'white' }}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '50%', height: 50, backgroundColor: 'green' }}>
            <Text style={{ color: 'white' }}>Start</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: '100%',
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
});
