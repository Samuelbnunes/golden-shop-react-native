import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home() {
  const navigation = useNavigation();
  const { setToken } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");

  const categories = [
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const handleLogout = () => {
    setToken(null);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Produtos",
      headerStyle: {
        backgroundColor: "#020201",
      },
      headerTitleStyle: {
        color: "#d4a74f",
      },
      headerLeft: () => (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          <MaterialIcons name="logout" size={28} color="#d4a74f" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.push("Info")}
          activeOpacity={0.8}
        >
          <MaterialIcons name="info" size={28} color="#d4a74f" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, setToken]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const url = category
        ? `https://fakestoreapi.com/products/category/${category}`
        : "https://fakestoreapi.com/products";
      const res = await axios.get(url);
      setProducts(res.data);
    } catch (error) {
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  if (loading)
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#d4a74f" />
        <Text style={styles.loadingText}>Carregando produtos...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.filterContainer}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity
          style={[
            styles.filterButton,
            category === "" && styles.filterButtonActive,
          ]}
          onPress={() => setCategory("")}
          activeOpacity={0.8}
        >
          <View style={styles.filterButtonContent}>
            <Text
              style={[
                styles.filterText,
                category === "" && styles.filterTextActive,
              ]}
            >
              Todos
            </Text>
          </View>
        </TouchableOpacity>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.filterButton,
              category === cat && styles.filterButtonActive,
            ]}
            onPress={() => setCategory(cat)}
            activeOpacity={0.8}
          >
            <View style={styles.filterButtonContent}>
              <Text
                style={[
                  styles.filterText,
                  category === cat && styles.filterTextActive,
                ]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {cat}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate("ProductDetail", { id: item.id })
            }
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020201",
    paddingTop: 10,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 0,
  },
  filterButton: {
    backgroundColor: "#020201",
    borderWidth: 2,
    borderColor: "#d4a74f",
    borderRadius: 18,
    marginHorizontal: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  filterButtonActive: {
    backgroundColor: "#d4a74f",
    borderColor: "#d4a74f",
    elevation: 6,
  },
  filterButtonContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  filterText: {
    color: "#d4a74f",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  filterTextActive: {
    color: "#020201",
  },
  listContent: {
    paddingBottom: 24,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#020201",
  },
  loadingText: {
    marginTop: 18,
    fontSize: 20,
    color: "#d4a74f",
    fontWeight: "bold",
  },
  headerButton: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  headerButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
