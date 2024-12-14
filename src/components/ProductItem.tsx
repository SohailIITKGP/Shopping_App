import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Product } from "../types/Product";

type ProductItemProps = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.imageUrl }} />
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.rating}>{product.rating} ★</Text>
        <Text style={styles.price}>₹{product.discountPrice}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 150,
    marginRight: 12,
    resizeMode: "contain",
  },
  info: {
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
  rating: {
    fontSize: 14,
    color: "#888",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
});
