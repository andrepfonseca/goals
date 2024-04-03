import { useFocusEffect } from "@react-navigation/native";
import { ProductCard, ProductCardType, Typography } from "components";
import { getAllItems } from "database";
import React from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";
import { seedData } from "utils/manageDb";
import { styles } from "./styles";

export const Progress = ({ navigation }: any) => {
  const [items, setItems] = React.useState<ProductCardType[]>([]);
  const getAll = async () => {
    let allItems;
    allItems = await getAllItems();
    if (!allItems.length) {
      await seedData();
      allItems = await getAllItems();
    }
    setItems(allItems);
  };

  function percentage() {
    const data = items.reduce(
      (acc, item) => {
        return {
          price: Number(acc.price) + Number(item.price),
          contribution:
            Number(acc.contribution) +
            (Number(item.price) - Number(item.remainingValue)),
        };
      },
      { price: 0, contribution: 0 }
    );
    return `${Math.round((data.contribution / data.price) * 100)}%`;
  }

  useFocusEffect(
    React.useCallback(() => {
      getAll();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FlatList
          style={{ width: "100%" }}
          contentContainerStyle={{ paddingVertical: 20 }}
          ListHeaderComponent={
            <View style={styles.header}>
              <Typography variant="pageTitle" style={styles.title}>
                Seu progresso
              </Typography>
              <Typography style={styles.percentage}>{percentage()}</Typography>
              <View style={styles.progressBar}>
                <View
                  style={{
                    ...styles.progressBar,
                    backgroundColor: "green",
                    marginTop: 0,
                    width: `${
                      percentage ? Number(percentage().replace("%", "")) : 0
                    }%`,
                  }}
                />
              </View>
            </View>
          }
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate("ProductCardDetails", { id: item.id })
              }
            >
              <ProductCard {...item} />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </SafeAreaView>
  );
};
