import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet} from "react-native";
// import { TouchableOpacity } from "react-native";
import { useNavigation, useRouter } from "expo-router";

export default function Info() {
  const navigation = useNavigation();
  const router = useRouter();

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
        <Text style={styles.text}>Bernardo Antunes Heckler</Text>
        <Text style={styles.raFooter}>RA: 1137118</Text>
        <Text style={styles.institution}>Instituição: Atitus Educação</Text>
      </View>

      {/* <View style={styles.exitButtonContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: "#8B008B",
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 8,
            marginTop: 10,
          }}
          onPress={() => BackHandler.exitApp()}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Sair do Aplicativo
          </Text>
        </TouchableOpacity>
      </View> */}
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
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#ffffffff",
  },
  card: {
    padding: 20,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    elevation: 8,
    color: "#fff",
  },
  text: { fontSize: 24, fontWeight: "700", marginBottom: 10, color: "#fff" },
  institution: {
    fontSize: 24,
    marginTop: 10,
    fontStyle: "normal",
    color: "#ffffffff",
  },
  raFooter: {
    fontSize: 24,
    marginTop: 30,
    fontWeight: "bold",
    color: "#ffffffff",
  },
  // exitButtonContainer: {
  //   marginTop: 40,
  //   width: "90%",
  //   marginTop: 200,
  // },
});