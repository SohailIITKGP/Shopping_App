import React from "react";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Product } from "../types/Product";

export default function Details() {
  const { product } = useLocalSearchParams();

  const parsedProduct: Product | null =
    typeof product === "string" ? JSON.parse(product) : null;

  if (!parsedProduct) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Product details not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: parsedProduct.imageUrl }}
          resizeMode="contain" 
        />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{parsedProduct.name}</Text>
        <Text style={styles.rating}>{parsedProduct.rating} ★</Text>
        <Text style={styles.originalPrice}>
          Original Price: ₹{parsedProduct.originalPrice}
        </Text>
        <Text style={styles.price}>₹{parsedProduct.discountPrice}</Text>
        <Text style={styles.offer}>Save: {parsedProduct.offerPercentage}%</Text>
      </View>

      <View style={styles.tagsContainer}>
        {parsedProduct.tags.map((tag: string, index: number) => (
          <Text key={index} style={styles.tag}>
            • {tag}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  imageContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: "#fff",
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  rating: {
    fontSize: 18,
    color: "#f39c12",
    marginBottom: 8,
  },
  originalPrice: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "#888",
    marginBottom: 4,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e74c3c",
    marginBottom: 8,
  },
  offer: {
    fontSize: 16,
    color: "green",
    fontWeight: "600",
  },
  tagsContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  tag: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
});
