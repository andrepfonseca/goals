import { ProductCard, ProductCardType, Typography } from "components";
import { getAllItems } from "database";
import React, { useEffect } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";
import { seedData } from "utils/manageDb";
import { styles } from "./styles";

export const Progress = ({ navigation }: any) => {
  const [items, setItems] = React.useState<ProductCardType[]>([]);
  const getAll = async () => {
    let allItems;
    await seedData();
    allItems = await getAllItems();
    // if (!allItems.length) {
    //     await seedData();
    // allItems = await getAllItems();
    // }
    // console.log(allItems);
    setItems(allItems);
    // return allItems;
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
