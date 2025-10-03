import { useState } from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  ActivityIndicator,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { setToken } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Campos obrigatórios");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });
      const data = res.data;
      if (data.token) {
        setToken(data.token);
        setLoading(false);
      } else {
        Alert.alert("Nome de usuário ou senha inválidos");
        setLoading(false);
      }
    } catch (error) {
      Alert.alert("Algum erro ocorreu");
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.card}>
        <Text style={styles.title}>BriqueShop</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>
        <TextInput
          placeholder="Usuário"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          placeholderTextColor="#bdbdbd"
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          placeholderTextColor="#bdbdbd"
        />
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#20e5ffff"
            style={{ marginTop: 20 }}
          />
        ) : (
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a600ffff",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
    maxWidth: 370,
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 32,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 12,
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#a600ffff",
    marginBottom: 8,
    textAlign: "center",
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 18,
    color: "#686dffff",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#20e5ffff",
    marginBottom: 16,
    fontSize: 20,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#f7f7f7",
    color: "#333",
    shadowColor: "#20e5ffff",
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  loginButton: {
    backgroundColor: "#20e5ffff",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
