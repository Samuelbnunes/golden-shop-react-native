import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { formatPriceBRL } from "../../utils/formatPrice";
import axios from "axios"; // Adiciona importação do axios

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        const data = res.data;
        setProduct(data);
      } catch (error) {
        setProduct(null);
        Alert.alert("Erro de Carga", "Não foi possível carregar o produto.");
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchProduct();
  }, [id]);

  if (loading)
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#8B008B" />
      </View>
    );

  if (!product || !product.id)
    return (
      <View style={styles.loading}>
        <Text style={{ color: "#fff", marginBottom: 20, fontSize: 18 }}>
          Produto não encontrado
        </Text>
        <Button
          title="Voltar para Produtos"
          color="#8B008B"
          onPress={() => router.replace("/home")}
        />
      </View>
    );
  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: product.image }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{formatPriceBRL(product.price)}</Text>
        </View>
        <Text style={styles.category}>Categoria: {product.category}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#8B008B",
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 8,
            marginTop: 10,
          }}
          onPress={() => router.replace("/home")}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    elevation: 8,
    width: "100%",
    maxWidth: 400,
  },
  imageWrapper: {
    width: 220,
    height: 220,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#f2e3ffff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 6,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
    textAlign: "center",
  },
  category: {
    fontSize: 24,
    marginBottom: 12,
    color: "#000000ff",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 18,
    color: "#000000",
    backgroundColor: "#f2f2f2ff",
    borderRadius: 8,
    padding: 10,
  },
  priceContainer: {
    flexDirection: "row",
    marginBottom: 18,
    gap: 8,
    justifyContent: "center",
  },
  priceLabel: {
    fontSize: 18,
    color: "#ff25ffff",
    fontWeight: "bold",
  },
  price: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#4dff00ff",
    marginLeft: 8,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7e9ff",
  },
});