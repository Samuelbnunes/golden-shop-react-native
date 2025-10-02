import { useState } from "react";
import {
  View,
  TextInput,
  Alert,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "expo-router";
import axios from "axios"; // Adiciona importação do axios

export default function Login() {
  const router = useRouter();
  const { setToken } = useAuth();
  const [username, setUsername] = useState(""); // johnd
  const [password, setPassword] = useState(""); // m38rmF$
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) return Alert.alert("Por Favor, Preencha os Campos obrigatórios");
    setLoading(true);

    try {
      const res = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });

      const data = res.data;

      if (data.token) {
        setToken(data.token);
        // Navega e substitui a tela de login na pilha para ir para a Home
        router.replace("/home");
      } else {
        Alert.alert("Campos inválidos!");
      }
    } catch (error) {
      Alert.alert("Nome ou Senha Inválida!");
    } finally {
      setLoading(false);
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
      <Text style={styles.subTitle}>Tenta esses: johnd // m38rmF$</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <TouchableOpacity style={styles.botaoLogin} onPress={handleLogin}>
          <Text style={styles.botaoTexto}>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#4652ffff",
  },
  botaoLogin: {
  backgroundColor: "#00c3ffff",
  paddingVertical: 16,
  paddingHorizontal: 32,
  borderRadius: 12,
  alignItems: "center",
  marginBottom: 30,
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowRadius: 6,
  elevation: 5,
},
botaoTexto: {
  color: "#fff",
  fontSize: 20,
  fontWeight: "bold",
  letterSpacing: 1,
},
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    marginBottom: 30,
    padding: 20,
    borderRadius: 8,
    backgroundColor: "#ffffffff",
    shadowColor: "#000000ff",
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 100,
    color: "#fff",
  },
  subTitle: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
    color: "#fff",
  },

  botao: {
    borderWidth: 1,
    borderColor: "#fff",
    marginBottom: 30,
    padding: 20,
    borderRadius: 8,
    backgroundColor: "#ffffffff",
    shadowColor: "#000000ff",
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
});