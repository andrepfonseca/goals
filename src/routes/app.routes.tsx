import React from "react";
import { Image, Platform, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Login } from "screens/Login";
import { Progress } from "../screens/Progress";
import Svg, { Path } from "react-native-svg";
import { ProductCardDetail } from "screens/ProductCardDetail";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        name="Progress"
        component={Progress}
        options={{
          tabBarIcon: ({ size, color }) => (
            <View
              style={{ backgroundColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Screen
        name="Product Card Detail"
        component={ProductCardDetail}
        options={{
          tabBarIcon: ({ size, color }) => (
            <View
              style={{ backgroundColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
