import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { formatPriceBRL } from "../utils/formatPrice";
import { useRouter } from "expo-router";

export default function ProductCard({ product }) {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <View style={styles.card} onPress={handlePress}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.title}</Text>
      <Text style={styles.price}>{formatPriceBRL(product.price)}</Text>
      <TouchableOpacity
          style={{
            backgroundColor: "#00738dff",
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 8,
            marginTop: 10,
          }}
          onPress={handlePress}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Ver Detalhes
          </Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f4eaffff',
    margin: 12,
    borderRadius: 32,
    padding: 14,
    elevation: 6,
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 6,
    color: '#000000ff',
    textAlign: 'center',
  },
  price: {
    fontSize: 24,
    color: '#000000ff',
    fontWeight: 'bold',
    marginTop: 4,
    marginBottom: 2,
    textAlign: 'center',
  },
});