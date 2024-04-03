import React, { useEffect, useState } from "react";
import { Asset } from "expo-asset";
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./styles";
import * as ImagePicker from "expo-image-picker";

import { IconButton, Input, MaskedInput, Typography } from "components";
import { createItem } from "database";
import { formatToNumber } from "utils/formatCurrencyToNumber";

export const AddProductCard = ({ navigation }: any) => {
  const [priceInput, setPriceInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [imageInput, setImageInput] = useState<
    Array<ImagePicker.ImagePickerAsset>
  >([]);

  const [isFormValid, setIsFormValid] = useState(false);

  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImageInput(result.assets);
      console.log(result.assets);
    }
  };

  useEffect(() => {
    if (priceInput && titleInput) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [priceInput, titleInput, imageInput]);

  const handleFormSubmit = async () => {
    const price = formatToNumber(priceInput);
    const defaultImageUri = Asset.fromModule(
      require("../../assets/defaultImage.jpg")
    ).uri;
    const image = imageInput[0]?.uri || defaultImageUri;
    try {
      const response = await createItem(titleInput, image, price, price);

      if (response) {
        navigation.navigate("Progress");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 30}
        style={{
          flex: 1,
        }}
      >
        <ScrollView style={styles.content}>
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
          <TouchableOpacity onPress={handleImageSelection}>
            {imageInput[0]?.uri ? (
              <Image
                source={{
                  uri: imageInput[0]?.uri,
                }}
                style={styles.image}
              />
            ) : (
              <Image
                source={require("../../assets/defaultImage.png")}
                style={styles.image}
              />
            )}
          </TouchableOpacity>
          <View style={styles.formContainer}>
            <Typography variant="title" style={{ color: "white" }}>
              {"Adicione o nome e valor do produto:"}
            </Typography>
            <Input value={titleInput} onChangeText={setTitleInput} />
            <MaskedInput
              onChangeText={setPriceInput}
              mask="money"
              type="numeric"
            />
            <TouchableOpacity
              style={[
                styles.button,
                !isFormValid && { backgroundColor: "#B6B4B4" },
              ]}
              onPress={handleFormSubmit}
              disabled={!isFormValid}
            >
              <Typography
                variant="body"
                style={{
                  color: "black",
                  fontWeight: "500",
                }}
              >
                {"Salvar"}
              </Typography>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
