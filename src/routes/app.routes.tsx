import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ProductCardDetail } from "screens/ProductCardDetail";
import { Progress } from "../screens/Progress";

const { Navigator, Screen } = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Progress"
        component={Progress}
        options={{ title: "Progress" }}
      />
      <Stack.Screen name="ProductCardDetails" component={ProductCardDetail} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
