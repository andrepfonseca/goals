import React, { useState } from "react";
import { SafeAreaView, View, Button, TextInput } from "react-native";
import { styles } from "./styles";
import { ProductCardType, Typography } from "components";

export const AddProductCard = ({ route }: any) => {
  const [item, setItem] = React.useState<ProductCardType>();
  const [priceInput, setPriceInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [imageInput, setImageInput] = useState("");

  const handleImageSelection = () => {
    // Implement logic to access image from gallery
  };

  const handleFormSubmit = () => {
    const product = {
      image: imageInput,
      price: priceInput,
      title: titleInput,
    };

    // Handle form submission logic
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Typography variant="pageTitle">{"Add Product"}</Typography>
        <Button title="Select Image" onPress={handleImageSelection} />
        <TextInput
          placeholder="Price"
          value={priceInput}
          onChangeText={setPriceInput}
        />
        <TextInput
          placeholder="Title"
          value={titleInput}
          onChangeText={setTitleInput}
        />
        <Button title="Submit" onPress={handleFormSubmit} />
      </View>
    </SafeAreaView>
  );
};
