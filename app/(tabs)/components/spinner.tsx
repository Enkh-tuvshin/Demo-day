import React, { useState } from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 50, color = '#000' }) => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <View style={styles.innerContainer}>
      <View style={styles.container}>
        {isLoading && (
          <>
            <View>
              <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', margin: 20 }}>
                Mongol TV
              </Text>
            </View>
            <ActivityIndicator size={size} color={color} />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Spinner;
