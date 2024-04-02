import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { IconButton, Input, ProductCardType, Typography } from "components";
import { useProductViewModel } from "viewmodel";
import { getAllItems, getItemById, patchItemById } from "database";
import { seedData } from "utils/manageDb";

export const ProductCardDetail = ({ route }: any) => {
  const { id } = route.params;
  const [item, setItem] = React.useState<ProductCardType>();
  const [priceInput, setPriceInput] = useState();

  const [price, setPrice] = React.useState<string>();
  const [percentage, setPercentage] = React.useState<string>();
  const [remainingValue, setRemainingValue] = React.useState<string>();

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

  useEffect(() => {
    if (item) {
      const data = useProductViewModel({
        price: item.price,
        remainingValue: item.remainingValue,
      });
      setPrice(data.price);
      setPercentage(data.percentage);
      setRemainingValue(data.remainingValue);
    }
  }, [item]);

  const handleAction = (
    item: ProductCardType,
    priceInput: number,
    action: "add" | "sub"
  ) => {
    patchItemById(item.id, {
      ...item,
      remainingValue:
        action === "add"
          ? add(item.remainingValue, priceInput)
          : sub(item.remainingValue, priceInput),
    }).then(() =>
      setItem({
        ...item,
        remainingValue:
          action === "add"
            ? add(item.remainingValue, priceInput)
            : sub(item.remainingValue, priceInput),
      })
    );
  };

  const sub = (remainingValue: number, priceInput: number) => {
    return Number(remainingValue) - Number(priceInput);
  };

  const add = (remainingValue: number, priceInput: number) => {
    return Number(remainingValue) + Number(priceInput);
  };

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
                <View style={{ ...styles.progressBar }}>
                  <View
                    style={{
                      ...styles.progressBar,
                      backgroundColor: "green",
                      marginTop: 0,
                      width: `${
                        percentage ? Number(percentage.replace("%", "")) : 0
                      }%`,
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.editContainer}>
              <Input onChangeText={setPriceInput} type="numeric" />
              {priceInput && (
                <View style={styles.buttonsContainer}>
                  <IconButton
                    icon="plus"
                    onPress={() => {
                      handleAction(item, priceInput, "sub");
                    }}
                    style={styles.addButton}
                  />
                  <IconButton
                    icon="minus"
                    onPress={() => handleAction(item, priceInput, "add")}
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
