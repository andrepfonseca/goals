import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Button,
  TextInput,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./styles";
import * as ImagePicker from "expo-image-picker";

import { Typography } from "components";
import { createItem } from "database";

export const AddProductCard = ({ navigation }: any) => {
  const [priceInput, setPriceInput] = useState<number>(0);
  const [titleInput, setTitleInput] = useState("");
  const [imageInput, setImageInput] = useState<
    Array<ImagePicker.ImagePickerAsset>
  >([]);

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

  const handleFormSubmit = async () => {
    try {
      const response = await createItem(
        titleInput,
        imageInput[0]?.uri,
        priceInput,
        priceInput
      );

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
            <Typography variant="pageTitle">
              {"Adicione o nome e valor do produto:"}
            </Typography>
            <TextInput
              placeholder="Title"
              value={titleInput}
              onChangeText={setTitleInput}
            />
            <TextInput
              placeholder="Preço Total"
              value={priceInput?.toString()}
              onChangeText={(text: string) => setPriceInput(Number(text))}
            />
            <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
              <Typography
                variant="body"
                style={{
                  color: "#FFFFFF",
                  fontWeight: "500",
                }}
              >
                {"SALVAR"}
              </Typography>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
