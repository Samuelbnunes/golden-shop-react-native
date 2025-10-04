import React, { useState } from "react";
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
  Image,
} from "react-native";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const COLORS = {
  background: "#020201",
  inputText: "#fff",
  buttonBackground: "#020201",
  buttonText: "#f1d680",
  errorText: "#ff3333",
  labelText: "#f1d680",
};

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
        {/* Logo PNG */}
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        {/* Campos de login */}
        <Text style={styles.label}>Usuário</Text>
        <TextInput
          placeholder="Digite seu usuário"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          placeholderTextColor={COLORS.labelText}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          placeholderTextColor={COLORS.labelText}
        />
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#d4a74f"
            style={{ marginTop: 20 }}
          />
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 370,
    backgroundColor: "#020201",
    borderRadius: 24,
    padding: 32,
    alignItems: "center",
    elevation: 12,
  },
  logo: {
    width: 400,
    height: 400,
    marginBottom: 30,
  },
  input: {
    color: COLORS.inputText,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    width: "90%",
    borderWidth: 1,
    borderColor: COLORS.labelText,
  },
  button: {
    backgroundColor: COLORS.buttonBackground,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    width: "90%",
  },
  buttonText: {
    color: COLORS.buttonText,
    fontSize: 18,
    fontWeight: "bold",
  },
  label: {
    color: COLORS.labelText,
    fontSize: 16,
    marginBottom: 6,
    alignSelf: "flex-start",
    width: "90%",
  },
});
