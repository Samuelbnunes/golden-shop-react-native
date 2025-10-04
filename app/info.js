import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";

const COLORS = {
  background: "#020201",
  cardBackground: "#020201",
  title: "#d4a74f",
  text: "#fff",
  author: "#d4a74f",
  institution: "#fff",
  raFooter: "#f1d680",
};

const integrantes = [
  { nome: "Samuel Nunes", ra: "1136923" },
  { nome: "Dionatha Diniz", ra: "1137190" },
  { nome: "Arthur Gilmar Biolchi", ra: "1137267" },
];

export default function Info() {
  const navigation = useNavigation();
  const { setToken } = useAuth();

  const handleLogout = () => {
    setToken(null);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Informações",
      headerStyle: {
        backgroundColor: "#020201",
      },
      headerTitleStyle: {
        color: "#d4a74f",
      },
      headerTintColor: "#d4a74f",
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          <MaterialIcons name="logout" size={28} color="#d4a74f" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, setToken]);

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.card}>
        <Text style={styles.text}>Desenvolvedores:</Text>
        {integrantes.map((item, idx) => (
          <View key={idx} style={styles.integranteItem}>
            <Text style={styles.author}>{item.nome}</Text>
            <Text style={styles.raFooter}>RA: {item.ra}</Text>
          </View>
        ))}
        <Text style={styles.institution}>Instituição: Atitus Educação</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 400,
    height: 400,
    marginBottom: 30,
  },
  card: {
    padding: 28,
    borderRadius: 18,
    width: "90%",
    minHeight: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.cardBackground,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 12,
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
    color: COLORS.text,
    textAlign: "center",
  },
  author: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.author,
    marginBottom: 2,
    textAlign: "center",
  },
  institution: {
    fontSize: 22,
    marginTop: 18,
    color: COLORS.institution,
    textAlign: "center",
  },
  raFooter: {
    fontSize: 18,
    marginBottom: 8,
    color: COLORS.raFooter,
    textAlign: "center",
  },
  integranteItem: {
    marginBottom: 10,
    alignItems: "center",
  },
  headerButton: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  headerButtonText: {
    color: "#d4a74f",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
