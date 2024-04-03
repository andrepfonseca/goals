import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { styles } from "./styles";
import {
  IconButton,
  MaskedInput,
  ProductCardType,
  ProgressBar,
  Typography,
} from "components";
import { useProductViewModel } from "viewmodel";
import { getAllItems, getItemById, patchItemById } from "database";
import { seedData } from "utils/manageDb";
import { formatToNumber } from "utils/formatCurrencyToNumber";

export const ProductCardDetail = ({ navigation, route }: any) => {
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
    priceInput: string,
    action: "add" | "sub"
  ) => {
    const price = formatToNumber(priceInput);
    const newValue = action === "add" ? price + item.price : price - item.price;

    if (newValue < 0 || newValue > item.price) {
      console.log("Invalid value");
      return;
    }
    patchItemById(item.id, {
      ...item,
      remainingValue:
        action === "add"
          ? add(item.remainingValue, price)
          : sub(item.remainingValue, price),
    }).then(() =>
      setItem({
        ...item,
        remainingValue:
          action === "add"
            ? add(item.remainingValue, price)
            : sub(item.remainingValue, price),
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
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
          <ScrollView style={styles.content}>
            <View style={styles.headerContainer}>
              <View style={styles.goBackButtonContainer}>
                <IconButton
                  icon={"chevron-left"}
                  onPress={() => {
                    navigation.goBack();
                  }}
                  color="#D3FA3A"
                  backgroundColor="#1b1b1b"
                  disabled={false}
                  size={30}
                />
              </View>
              <View style={styles.imageContainer}>
                <Image src={item.image} style={styles.image} />
              </View>
              <Typography variant="pageTitle" style={styles.title}>
                {item.title}
              </Typography>
            </View>
            <View style={styles.detailContainer}>
              <View>
                <View style={styles.valueContainer}>
                  <Typography variant="subtitle" style={styles.whiteText}>
                    Valor total:{" "}
                  </Typography>
                  <Typography variant="subtitle" style={styles.whiteText}>
                    {price}
                  </Typography>
                </View>
                <View style={styles.valueContainer}>
                  <Typography variant="subtitle" style={styles.whiteText}>
                    Quanto você já tem:{" "}
                  </Typography>
                  <Typography variant="subtitle" style={styles.whiteText}>
                    {remainingValue}
                  </Typography>
                </View>
                <View style={styles.progressContainer}>
                  <ProgressBar size="large" progress="100%" />
                </View>
              </View>
              <View style={styles.editContainer}>
                <MaskedInput
                  onChangeText={setPriceInput}
                  type="numeric"
                  mask="money"
                />
                <View style={styles.buttonsContainer}>
                  <IconButton
                    icon="plus"
                    onPress={() => {
                      handleAction(item, priceInput!, "sub");
                    }}
                    color="black"
                    style={[
                      styles.addButton,
                      !priceInput && {
                        backgroundColor: "#B6B4B4",
                      },
                    ]}
                    disabled={!priceInput}
                  />
                  <IconButton
                    icon="minus"
                    onPress={() => handleAction(item, priceInput!, "add")}
                    color="black"
                    style={[
                      styles.removeButton,
                      !priceInput && {
                        backgroundColor: "#B6B4B4",
                      },
                    ]}
                    disabled={!priceInput}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  );
};
