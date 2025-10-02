import { Stack } from 'expo-router';
import { useState } from 'react';
import Login from './app/login';
import Home from './app/home';

export default function Layout() {
  const [token, setToken] = useState(null);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!token ? (
        <Stack.Screen name="login">{() => <Login setToken={setToken} />}</Stack.Screen>
      ) : (
        <Stack.Screen name="home">{() => <Home token={token} setToken={setToken} />}</Stack.Screen>
      )}
    </Stack>
  );
}
