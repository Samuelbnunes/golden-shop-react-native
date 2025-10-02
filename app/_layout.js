// app/_layout.js
import { Stack, Redirect } from 'expo-router';
import { AuthProvider, useAuth } from '../context/AuthContext'; 
import { ActivityIndicator, View, StyleSheet } from 'react-native';

// Este componente usa o contexto e define as rotas
function RootLayoutContent() {
  const { token } = useAuth();
  const isLoading = false; 

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4652ffff" />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#4652ffff' }, // Fundo Rosa
        headerTintColor: '#ffffffff',
        headerTitleAlign: 'center',
        headerShadowVisible: true, 
        // Sombra verde no título
        headerTitleStyle: { textShadowColor: '#000000ff', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 3 }
      }}
    >
      {/* Rota condicional: Se logado, mostra o app; senão, o index (Login) */}
      {token ? (
        <>
          <Stack.Screen name="home" options={{ title: 'Produtos' }} />
          <Stack.Screen name="product/[id]" options={{ title: 'Detalhes' }} />
          <Stack.Screen name="info" options={{ title: 'Informações do Grupo' }} />
        </>
      ) : (
        // index.js é a rota de Login
        <Stack.Screen name="index" options={{ title: '' }} />
      )}
    </Stack>
  );
}

// O Layout principal que provê o contexto
export default function Layout() {
  return (
    <AuthProvider>
      <RootLayoutContent />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4652ffff',
  },
});