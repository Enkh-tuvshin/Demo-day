/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Video, ResizeMode } from 'expo-av';
import { useUser } from '@clerk/clerk-expo';
import { Camera, CameraType } from 'expo-camera';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { RTCView, RTCPeerConnection, mediaDevices } from 'react-native-webrtc';

import Header from './components/Header';
import Spinner from './components/spinner';

import { ChatUp } from '@/assets/icons/ChatUp';
import { Microphone } from '@/assets/icons/Microphone';
import { MuteMic } from '@/assets/icons/MuteMic';
import { Repeat } from '@/assets/icons/Repeat';
import { useGetTodoListQuery } from '@/graphql/generated';

const Home = (): React.ReactNode => {
  const [users, setUsers] = useState(CameraType.front);
  const [text, setText] = useState<'Буцах' | 'Эхлэх' | 'Алгасах'>('Эхлэх');
  const { width } = useWindowDimensions();
  const [camera, setCamera] = useState<any>(null);
  const { data, error, loading } = useGetTodoListQuery();
  const [statistic, requestPermission] = Camera.useCameraPermissions();
  const { user } = useUser();
  const [isMuted, setIsMuted] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  if (data) {
  }
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Spinner />
      </View>
    );
  }
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  const skip = (): React.ReactNode => {
    return null;
  };

  if (!statistic || !statistic.granted) {
    return (
      <View style={styles.container}>
        <Text>Give camera permission</Text>
        <Button title="Enable camera" onPress={requestPermission} />
      </View>
    );
  }

  const handleFlipCamera = (): void => {
    setUsers(users === CameraType.front ? CameraType.back : CameraType.front);
  };

  const toggleMicrphone = (): void => {
    if (stream) {
      const audioTracks = stream.getAudioTracks();
      if (audioTracks.length > 0) {
        audioTracks[0].enabled = !isMuted;
        setIsMuted(!isMuted);
      }
    }
  };

  const Footer = (): React.ReactNode => {
    return (
      <>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <TouchableOpacity
            style={{
              width: '50%',
              height: 50,
              backgroundColor: 'red',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setText('Эхлэх')}
            activeOpacity={0.7}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Буцах</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '50%',
              height: 50,
              backgroundColor: '#298553',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setText('Алгасах')}
            activeOpacity={0.7}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>{text}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.4}>
          <Link href="./components/ChatScreen">
            <View style={styles.chat}>
              <Text style={{ marginRight: 5 }}>Чатлах</Text>
              <ChatUp />
            </View>
          </Link>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        {/* user 1 */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>{user?.username} show Camera</Text>
        </View>

        {/* user 2 */}

        <View style={{ flex: 1, overflow: 'hidden' }}>
          <Camera
            style={{
              marginTop: -150,
              width,
              height: width * 1.33,
            }}
            type={users}
            ref={(ref) => setCamera(ref)}
            ratio="4:3">
            <View style={{ alignItems: 'flex-end', flex: 1, justifyContent: 'center' }}>
              <TouchableOpacity onPress={handleFlipCamera}>
                <Repeat />
              </TouchableOpacity>
              <Text style={{ marginTop: 180 }}>.</Text>
            </View>
          </Camera>
        </View>
        <Footer />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    height: 45,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    flexDirection: 'row',
    paddingHorizontal: 180,
  },
});

export default Home;
