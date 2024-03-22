import { Tabs } from 'expo-router';

const TabLayout: React.FC = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, headerTintColor: 'dark' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: true,
        }}
      />
      <Tabs.Screen name="components/login" options={{ title: 'Login' }} />
      <Tabs.Screen name="components/signup" options={{ title: 'Sign up' }} />
      <Tabs.Screen
        name="components/Header"
        options={{
          title: 'Navbar',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: true,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
