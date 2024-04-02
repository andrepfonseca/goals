import { AppRoutes } from "@routes/app.routes";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { initializeDatabase } from "database";

export default function App() {
  useEffect(() => {
    const initializeDB = async () => {
      try {
        await initializeDatabase();
        console.log("Database initialized");
      } catch (error) {
        console.error("Error:", error);
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
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
