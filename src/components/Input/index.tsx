import React, { useState } from "react";
import { TextInput, TextStyle, ViewStyle } from "react-native";
import { styles } from "./styles";

interface InputProps {
  onChangeText?: React.Dispatch<React.SetStateAction<any>>;
  value?: string;
  style?: TextStyle;
  containerStyle?: ViewStyle;
  type?: "numeric" | "default";
}

export const Input: React.FC<InputProps> = ({
  onChangeText,
  value,
  style,
  type = "default",
}) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      value={value}
      style={[styles.input, style]}
      underlineColorAndroid="transparent"
      keyboardType={type}
      cursorColor="#D3FA3A"
    />
  );
};
