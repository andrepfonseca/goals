import { AppRoutes } from "@routes/app.routes";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { initializeDatabase } from "database";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    const initializeDB = async () => {
      try {
        await initializeDatabase();
        console.log("Database initialized");
        await SplashScreen.hideAsync();
      } catch (error) {
        console.error("Error:", error);
        await SplashScreen.hideAsync();
      }
    };

    // const deleteDb = async () => {
    //   try {
    //     await deleteDatabase();
    //     console.log("Database deleted");
    //   } catch (error) {
    //     console.error("Error:", error);
    //   }
    // };

    initializeDB();
  }, []);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#1B1B1B",
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <AppRoutes />
    </NavigationContainer>
  );
}
