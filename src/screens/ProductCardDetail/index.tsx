import React from "react";
import { Image, SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { IconButton, Input, ProductCardType, Typography } from "components";
import { useProductViewModel } from "viewmodel";

const mockData: ProductCardType = {
  id: 1,
  image:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  title: "PlayStation 5",
  price: 100,
  remainingValue: 100,
  percentage: 100,
};

export const ProductCardDetail = (product: ProductCardType) => {
  const { price, percentage, remainingValue } = useProductViewModel({
    price: mockData.price,
    remainingValue: mockData.remainingValue,
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <View style={styles.imageContainer}>
            <Image src={mockData.image} style={styles.image} />
          </View>
          <Typography variant="pageTitle" style={styles.title}>
            {mockData.title}
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
            <Input />
            <View style={styles.buttonsContainer}>
              <IconButton
                icon="plus"
                onPress={() => {}}
                style={styles.addButton}
              />
              <IconButton
                icon="minus"
                onPress={() => {}}
                style={styles.removeButton}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
