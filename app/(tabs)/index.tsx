// import { Video, ResizeMode } from 'expo-av';
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

import Header from './components/Header';
import Spinner from './components/spinner';

import { ChatUp } from '@/assets/icons/ChatUp';
import { FilterEmoji } from '@/assets/icons/FilterEmoji';
import { Microphone } from '@/assets/icons/Microphone';
import { Repeat } from '@/assets/icons/Repeat';
import { useGetTodoListQuery } from '@/graphql/generated';

const Home = (): React.ReactNode => {
  // const video = useRef(null);
  const [user, setUser] = useState(CameraType.front);
  const [text, setText] = useState<'Back' | 'Start' | 'Skip'>('Start');
  const { width, height: windowHeight } = useWindowDimensions();
  const [camera, setCamera] = useState<any>(null);
  const { data, error, loading } = useGetTodoListQuery();
  const [statistic, requestPermission] = Camera.useCameraPermissions();

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

  if (!statistic || !statistic.granted) {
    return (
      <View style={styles.container}>
        <Text>Give camera permission</Text>
        <Button title="Enable camera" onPress={requestPermission} />
      </View>
    );
  }
  const handleFlipCamera = (): void => {
    setUser(user === CameraType.front ? CameraType.back : CameraType.front);
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
            activeOpacity={0.7}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Back</Text>
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
            onPress={() => setText('Skip')}
            activeOpacity={0.7}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>{text}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.4}>
          <Link href={'./components/ChatScreen'}>
            <View style={styles.chat}>
              <Text>Chat</Text>
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
          <Text>User 1 show Camera</Text>
        </View>

        {/* <Video
          ref={video}
          style={{ flex: 1 }}
          source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          resizeMode={ResizeMode.CONTAIN}
        /> */}

        {/* user 2 */}

        <View style={{ flex: 1, overflow: 'hidden' }}>
          <Camera
            style={{
              marginTop: -150,
              width: width,
              height: width * 1.33,
            }}
            type={user}
            ref={(ref) => setCamera(ref)}
            ratio="4:3">
            <View style={{ alignItems: 'flex-end', flex: 1, justifyContent: 'center' }}>
              <TouchableOpacity onPress={handleFlipCamera}>
                <Repeat />
              </TouchableOpacity>
              <TouchableOpacity>
                <Microphone />
              </TouchableOpacity>
              <TouchableOpacity>
                <FilterEmoji />
              </TouchableOpacity>
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
