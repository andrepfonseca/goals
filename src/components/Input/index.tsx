import React from "react";
import { TextInput, TextStyle, ViewStyle } from "react-native";
import { styles } from "./styles";

interface InputProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  style?: TextStyle;
  containerStyle?: ViewStyle;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  onChangeText,
  value,
  style,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      style={[styles.input, style]}
      placeholderTextColor="#999999"
      underlineColorAndroid="transparent"
    />
  );
};
