import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    display: "flex",
    width: "100%",
    gap: 20,
  },
  image: {
    flexGrow: 1,
    width: "100%",
    height: 400,
  },
  formContainer: {
    flex: 1,
    display: "flex",
    width: "100%",
    padding: 20,
    gap: 20,
  },
  button: {
    width: "100%",
    backgroundColor: "#2DB6CF",
    height: 45,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
