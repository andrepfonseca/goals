import React from "react";
import { Image, SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { IconButton, Input, ProductCardType, Typography } from "components";
import { useProductViewModel } from "viewmodel";

const mockData: ProductCardType = {
  id: 1,
  image:
    "https://images.kabum.com.br/produtos/fotos/238671/console-sony-playstation-5_1634132554_gg.jpg",
  title: "PlayStation 5",
  price: 100,
  remainingValue: 100,
  percentage: 100,
};

export const ProductCardDetail = () => {
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
