import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B1B1B",
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 20,
    width: "100%",
    paddingBottom: 20,
  },
  image: {
    flexGrow: 1,
    width: "100%",
    height: 380,
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
    backgroundColor: "#D3FA3A",
    height: 45,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  goBackButtonContainer: {
    width: "100%",
    marginBottom: 5,
    marginTop: 5,
  },
});
