import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  StyleSheet,
  Text,
} from "react-native";
import { useRouter } from "expo-router";

export default function Login({ setToken }) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) return Alert.alert("Campos obrigatórios");
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.token) {
        setToken(data.token); // só define token após login correto
        setLoading(false);
      } else {
        setLoading(false);
        Alert.alert("Nome de usuário ou senha inválidos");
      }
    } catch (error) {
      setLoading(false);
      Alert.alert("Algum erro ocorreu");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BriqueShop</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator size="large" color="#000000ff" />
      ) : (
        <Button title="Login" onPress={handleLogin} color="#c3c3c3ff" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#00ff48ff",
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    fontSize: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000000ff",
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});
