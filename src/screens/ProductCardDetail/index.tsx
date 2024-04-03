import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
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
import {
  deleteItemById,
  getAllItems,
  getItemById,
  patchItemById,
} from "database";
import { seedData } from "utils/manageDb";
import { formatToNumber } from "utils/formatCurrencyToNumber";
import * as ImagePicker from "expo-image-picker";

export const ProductCardDetail = ({ navigation, route }: any) => {
  const { id } = route.params;
  const [item, setItem] = React.useState<ProductCardType>();
  const [priceInput, setPriceInput] = useState();

  const [price, setPrice] = React.useState<string>();
  const [percentage, setPercentage] = React.useState<string>();
  const [remainingValue, setRemainingValue] = React.useState<string>();

  const [imageInput, setImageInput] = useState<
    Array<ImagePicker.ImagePickerAsset>
  >([]);

  const handleImageSelection = async (item: ProductCardType) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      patchItemById(item.id, {
        ...item,
        image: result.assets[0].uri,
      }).then(
        () =>
          result.assets &&
          setItem({
            ...item,
            image: result.assets[0]?.uri,
          })
      );
    }
  };

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

  const handleDeleteItem = async () => {
    try {
      const response = await deleteItemById(id);

      if (response) {
        navigation.navigate("Progress");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getItem();
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
    const newValue =
      action === "add"
        ? price + item.remainingValue
        : item.remainingValue - price;

    if (newValue < 0 || newValue > item.price) {
      console.log("Invalid value", newValue);
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

                <IconButton
                  icon={"trash"}
                  onPress={() => {
                    Alert.alert(
                      "Deletar",
                      "Tem certeza que deseja deletar esse item? ",
                      [
                        {
                          text: "Cancelar",
                          style: "cancel",
                        },
                        {
                          text: "OK",
                          onPress: handleDeleteItem,
                        },
                      ]
                    );
                  }}
                  color="#D3FA3A"
                  backgroundColor="#1b1b1b"
                  disabled={false}
                  size={30}
                />
              </View>
              <View style={styles.imageContainer}>
                <TouchableOpacity
                  onPress={() => handleImageSelection(item)}
                  style={{
                    position: "relative",
                  }}
                >
                  <Image src={item.image} style={styles.image} />
                  <IconButton
                    icon="edit"
                    size={15}
                    style={styles.editImage}
                    onPress={() => {}}
                  />
                </TouchableOpacity>
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
                  <ProgressBar size="large" progress={percentage || "0%"} />
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
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  );
};
