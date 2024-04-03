import React, { useState } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { styles } from "./styles";
import { TextInputMask, TextInputMaskTypeProp } from "react-native-masked-text";

interface InputProps {
  onChangeText?: React.Dispatch<React.SetStateAction<any>>;
  value?: string;
  style?: TextStyle;
  containerStyle?: ViewStyle;
  type?: "numeric" | "default";
  mask: TextInputMaskTypeProp;
}

export const MaskedInput: React.FC<InputProps> = ({
  onChangeText,
  value,
  style,
  type = "default",
  mask,
}) => {
  return (
    <TextInputMask
      onChangeText={onChangeText}
      value={value}
      style={[styles.input, style]}
      underlineColorAndroid="transparent"
      keyboardType={type}
      cursorColor="#D3FA3A"
      // placeholder={placeholder}
      placeholderTextColor="#fff"
      type={mask}
    />
  );
};
