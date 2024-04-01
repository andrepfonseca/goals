import React from "react";
import { Text, TextProps, TextStyle } from "react-native";
import { styles } from "./styles";

export type TypographyVariant =
  | "pageTitle"
  | "title"
  | "subtitle"
  | "body"
  | "caption";

export const variantsDict = {
  pageTitle: styles.pageTitle,
  title: styles.title,
  subtitle: styles.subtitle,
  body: styles.body,
  caption: styles.caption,
};

export interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
  style?: TextStyle;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  style,
  children,
  ...rest
}) => {
  return (
    <Text style={[variantsDict[variant], style]} {...rest}>
      {children}
    </Text>
  );
};
