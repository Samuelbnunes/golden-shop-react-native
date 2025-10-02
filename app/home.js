import { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  FlatList,
  Button,
  ActivityIndicator,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import ProductCard from "../components/ProductCard";
import { useRouter, useNavigation } from "expo-router";
import { useAuth } from "../context/AuthContext";
import axios from "axios"; // Adiciona importação do axios

export default function Home() {
  const router = useRouter();
  const navigation = useNavigation();
  const { setToken } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");

  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const handleLogout = () => {
    setToken(null);
    router.replace("/");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Produtos",
      headerLeft: () => (
        <Button title="Logout" color="#ffffffff" onPress={handleLogout} />
      ),
      headerRight: () => (
        <Button
          title="Info"
          color="#ffffffff"
          onPress={() => router.push("/info")}
        />
      ),
    });
  }, [navigation, router, setToken]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const url = category
        ? `https://fakestoreapi.com/products/category/${category}`
        : "https://fakestoreapi.com/products";

      const res = await axios.get(url);
      const data = res.data;
      setProducts(data);
    } catch (error) {
      Alert.alert("Problemas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  if (loading)
    return (
      <ActivityIndicator
        size="large"
        color="#4652ffff"
        style={styles.loading}
      />
    );

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.filterContainer}>
        <View
          style={{
            marginHorizontal: 5,
            backgroundColor: category === "" ? "#3e0298ff" : "#686dffff",
            borderRadius: 5,
          }}
        >
          <Button
            title="Todos"
            color={category === "" ? "#fff" : "#000"}
            onPress={() => setCategory("")}
          />
        </View>
        {categories.map((cat) => (
          <View
            key={cat}
            style={{
              marginHorizontal: 5,
              backgroundColor: category === cat ? "#3e0298ff" : "#686dffff",
              borderRadius: 5,
            }}
          >
            <Button
              title={cat}
              color={category === cat ? "#fff" : "#000"}
              onPress={() => setCategory(cat)}
            />
          </View>
        ))}
      </ScrollView>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => router.push(`/product/${item.id}`)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffffff", paddingTop: 10 },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loading: { flex: 1, justifyContent: "center", backgroundColor: "#fdeeffff" },
});