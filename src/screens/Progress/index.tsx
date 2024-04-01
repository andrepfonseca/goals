import React, { useEffect } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { ProductCard, Typography, ProductCardType } from "components";
import { getAllItems } from "database";
import { clearData, seedData } from "utils/manageDb";

export const Progress = () => {
  const [items, setItems] = React.useState<ProductCardType[]>([]);
  const getAll = async () => {
    let allItems;
    allItems = await getAllItems();
    if (!allItems.length) {
      await seedData();
      allItems = await getAllItems();
    }
    console.log(allItems);
    setItems(allItems);
    return allItems;
  };

  useEffect(() => {
    getAll();
    // clearData();
  }, []);

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
              <Typography style={styles.percentage}>50%</Typography>
              <View style={styles.progressBar}></View>
            </View>
          }
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductCard {...item} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </SafeAreaView>
  );
};
