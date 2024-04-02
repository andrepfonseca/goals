import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { IconButton, Input, ProductCardType, Typography } from "components";
import { useProductViewModel } from "viewmodel";
import { getAllItems, getItemById, patchItemById } from "database";
import { seedData } from "utils/manageDb";

const mockData: ProductCardType = {
  id: 1,
  image:
    "https://images.kabum.com.br/produtos/fotos/238671/console-sony-playstation-5_1634132554_gg.jpg",
  title: "PlayStation 5",
  price: 100,
  remainingValue: 100,
  percentage: 100,
};

export const ProductCardDetail = ({ route }: any) => {
  const { id } = route.params;
  const [item, setItem] = React.useState<ProductCardType>();
  const [priceInput, setPriceInput] = useState();

  // const [price, setPrice] = React.useState<string>();
  // const [percentage, setPercentage] = React.useState<string>();
  // const [remainingValue, setRemainingValue] = React.useState<string>();

  let price, percentage, remainingValue;

  if (item) {
    const data = useProductViewModel({
      price: item.price,
      remainingValue: item.remainingValue,
    });
    price = data.price;
    percentage = data.percentage;
    remainingValue = data.remainingValue;
  }

  const getItem = async () => {
    let allItems;
    let item = await getItemById(id);
    if (!item) {
      await seedData();
      allItems = await getAllItems();
      setItem(allItems[0]);
    } else {
      setItem(item);
    }
    // return allItems;
  };

  useEffect(() => {
    getItem();
    // clearData();
  }, []);

  return (
    item && (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerContainer}>
            <View style={styles.imageContainer}>
              <Image src={item.image} style={styles.image} />
            </View>
            <Typography variant="pageTitle" style={styles.title}>
              {item.title}
            </Typography>
          </View>
          <View style={styles.detailContainer}>
            <View style={styles.infoContainer}>
              <View style={styles.valueContainer}>
                <Typography variant="subtitle">Valor total: </Typography>
                <Typography variant="body">{price}</Typography>
              </View>
              <View style={styles.valueContainer}>
                <Typography variant="subtitle">Valor restante: </Typography>
                <Typography variant="body">{remainingValue}</Typography>
              </View>
              <View style={styles.progressContainer}>
                <Typography variant="caption">
                  Seu progresso: {percentage}
                </Typography>
                <View style={styles.progressBar} />
              </View>
            </View>
            <View style={styles.editContainer}>
              <Input onChangeText={setPriceInput} />
              {priceInput && (
                <View style={styles.buttonsContainer}>
                  <IconButton
                    icon="plus"
                    onPress={() => {
                      patchItemById(item.id, {
                        ...item,
                        remainingValue: item.remainingValue + priceInput,
                      });
                      console.warn(item.remainingValue + priceInput);
                    }}
                    style={styles.addButton}
                  />
                  <IconButton
                    icon="minus"
                    onPress={() => {
                      console.log(mockData.remainingValue - priceInput);
                    }}
                    style={styles.removeButton}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  );
};
