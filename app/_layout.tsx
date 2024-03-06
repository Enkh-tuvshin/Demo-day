import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ClerkProvider } from '@clerk/clerk-expo';
import { Stack } from 'expo-router';

const key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
const RootLayoutNav: React.FC = () => {
  const client = new ApolloClient({
    uri: 'https://nextjs-graphql-chi.vercel.app/api/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <ClerkProvider publishableKey={String(key)}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ClerkProvider>
    </ApolloProvider>
  );
};

export default RootLayoutNav;
