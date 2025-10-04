import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { formatPriceBRL } from "../../utils/formatPrice";

export default function ProductDetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#20e5ffff" />
      </View>
    );
  }

  if (!product || !product.id) {
    return (
      <View style={styles.loading}>
        <Text style={styles.notFound}>Produto não encontrado.</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.replace("Home")}
          activeOpacity={0.8}
        >
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: product.image }} style={styles.image} />
        </View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Preço:</Text>
          <Text style={styles.price}>{formatPriceBRL(product.price)}</Text>
        </View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.replace("Home")}
          activeOpacity={0.8}
        >
          <Text style={styles.backButtonText}>Voltar para Produtos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 24,
    backgroundColor: "#020201",
    flexGrow: 1,
  },
  card: {
    backgroundColor: "#020201",
    borderRadius: 24,
    padding: 28,
    alignItems: "center",
    width: "100%",
    maxWidth: 420,
    elevation: 12,
  },
  imageWrapper: {
    width: 200,
    height: 200,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#020201",
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
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#d4a74f",
    textAlign: "center",
  },
  category: {
    fontSize: 20,
    marginBottom: 12,
    color: "#fff",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 18,
    color: "#333",
    backgroundColor: "#f7f7f7",
    borderRadius: 8,
    padding: 10,
    textAlign: "center",
  },
  priceContainer: {
    flexDirection: "row",
    marginBottom: 18,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  priceLabel: {
    fontSize: 20,
    color: "#d4a74f",
    fontWeight: "bold",
  },
  price: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#f1d680",
    marginLeft: 8,
  },
  backButton: {
    backgroundColor: "#020201",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 3,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#020201",
  },
  notFound: {
    fontSize: 22,
    color: "#020201",
    marginBottom: 18,
    textAlign: "center",
  },
});