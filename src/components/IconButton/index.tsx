import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

interface IconButtonProps {
  icon: any;
  onPress: () => void;
  size?: number;
  color?: string;
  backgroundColor?: string;
  style?: ViewStyle | ViewStyle[];
  disabled?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  size = 24,
  color = "#FFFFFF",
  backgroundColor = "#007bff",
  style,
  disabled = true,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { width: size * 2, height: size * 2, borderRadius: size / 2 },
        { backgroundColor },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Feather name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};
