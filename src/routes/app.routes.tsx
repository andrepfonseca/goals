import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ProductCardDetail } from "screens/ProductCardDetail";
import { Progress } from "../screens/Progress";
import { AddProductCard } from "screens/AddProductCard";

const { Navigator, Screen } = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    // <NavigationContainer>
    <Stack.Navigator screenOptions={{ animation: "fade_from_bottom" }}>
      <Stack.Screen
        name="Progress"
        component={Progress}
        options={{
          headerShown: false,
          statusBarColor: "#1B1B1B",
          statusBarTranslucent: true,
          statusBarStyle: "light",
        }}
      />
      <Stack.Screen
        name="ProductCardDetails"
        component={ProductCardDetail}
        options={{
          headerShown: false,
          statusBarColor: "#1B1B1B",
          statusBarTranslucent: true,
          statusBarStyle: "light",
        }}
      />
      <Stack.Screen name="AddProductCard" component={AddProductCard} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
