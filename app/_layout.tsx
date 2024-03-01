import { ClerkProvider } from '@clerk/clerk-expo';
import { Stack } from 'expo-router';

const key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
const RootLayoutNav: React.FC = () => {
  return (
    <ClerkProvider publishableKey={String(key)}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ClerkProvider>
  );
};

export default RootLayoutNav;
