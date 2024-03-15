import React, { useState } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 40, color = '#000' }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading process (replace with your actual logic)
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size={size} color={color} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;
