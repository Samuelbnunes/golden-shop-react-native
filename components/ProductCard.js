import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { formatPriceBRL } from "../utils/formatPrice";
import { useNavigation } from "@react-navigation/native";

export default function ProductCard({ product }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ProductDetail", { id: product.id });
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: product.image }} style={styles.image} />
      </View>
      <Text style={styles.name}>{product.title}</Text>
      <Text style={styles.price}>{formatPriceBRL(product.price)}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f4eaffff",
    margin: 14,
    borderRadius: 32,
    padding: 18,
    elevation: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  imageWrapper: {
    width: 140,
    height: 140,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#20e5ffff",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#3e0298ff",
    textAlign: "center",
  },
  price: {
    fontSize: 22,
    color: "#00738dff",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#20e5ffff",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginTop: 8,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});