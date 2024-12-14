import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import ProductItem from "../components/ProductItem";
import Separator from "../components/Separator";
import { PRODUCTS_LIST } from "../data/contants";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {PRODUCTS_LIST.length > 0 ? (
        <FlatList
          data={PRODUCTS_LIST}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/details",
                  params: { product: JSON.stringify(item) },
                })
              }
            >
              <ProductItem product={item} />
            </Pressable>
          )}
        />
      ) : (
        <Text style={styles.emptyText}>No products available.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#999",
  },
});
