import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Info() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Informações Gerais",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BriqueShop</Text>
      <View style={styles.card}>
        <Text style={styles.text}>Desenvolvido por:</Text>
        <Text style={styles.author}>Bernardo Antunes Heckler</Text>
        <Text style={styles.raFooter}>RA: 1137118</Text>
        <Text style={styles.institution}>Instituição: Atitus Educação</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#686dffff",
    padding: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#fff",
    letterSpacing: 2,
  },
  card: {
    padding: 28,
    borderRadius: 18,
    width: "90%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 12,
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
    color: "#757575ff",
    textAlign: "center",
  },
  author: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: 8,
    textAlign: "center",
  },
  institution: {
    fontSize: 22,
    marginTop: 10,
    color: "#000000ff",
    textAlign: "center",
  },
  raFooter: {
    fontSize: 22,
    marginTop: 18,
    fontWeight: "bold",
    color: "#676767ff",
    textAlign: "center",
  },
});
