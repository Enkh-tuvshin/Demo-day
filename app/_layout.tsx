import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ClerkProvider } from '@clerk/clerk-expo';
import { Stack } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

const key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
const RootLayoutNav: React.FC = () => {
  const client = new ApolloClient({
    uri: 'https://nextjs-graphql-chi.vercel.app/api/graphql',
    cache: new InMemoryCache(),
  });

  const tokenCache = {
    getToken(key: string) {
      try {
        return SecureStore.getItemAsync(key);
      } catch {
        return null;
      }
    },
    saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch {
        return null;
      }
    },
  };

  return (
    <ApolloProvider client={client}>
      <ClerkProvider publishableKey={String(key)} tokenCache={tokenCache}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="app/(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ClerkProvider>
    </ApolloProvider>
  );
};

export default RootLayoutNav;
