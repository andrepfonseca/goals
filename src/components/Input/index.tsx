import React from "react";
import { TextInput, TextStyle, ViewStyle } from "react-native";
import { styles } from "./styles";

interface InputProps {
  placeholder?: string;
  onChangeText?: React.Dispatch<React.SetStateAction<any>>;
  value?: string;
  style?: TextStyle;
  containerStyle?: ViewStyle;
  type?: "numeric" | "default";
}

export const Input: React.FC<InputProps> = ({
  placeholder,
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
      placeholderTextColor="#999999"
      underlineColorAndroid="transparent"
      keyboardType={type}
    />
  );
};
